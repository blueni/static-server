const fs = require( 'fs' )
const path = require( 'path' )
const mime = require( './mime.js' )

module.exports = function extendsResponse( res ){

    let _OriginResponse = res.constructor

    class Response extends _OriginResponse{

        header( ...args ){
            return this.setHeader( ...args )
        }

        status( code ){
            this.statusCode = code
            return this
        }

        type( ext = '' ){
            if( ext.startsWith( '.') ){
                ext = ext.substr( 1 )
            }
            let fileType = mime[ext] || 'text/plain'
            if( fileType.startsWith( 'text' ) ){
                fileType += '; charset=utf-8'
            }
            this.header( 'Content-Type', fileType )
        }
        
        sendFile( filename = '' ){
            let ext = path.extname( filename )
            this.type( ext )
            if( filename.indexOf( '.' ) < 0 || !fs.existsSync( filename ) ){
                this.end( 'Sorry,file not found!' )
                return
            }
            fs.createReadStream( filename ).pipe( this )
        }

    }

    res.__proto__ = Response.prototype

    return res

}
