const { readFile } = require( './read-file.js' )

module.exports = function extendsResponse( res ){

    let _OriginResponse = res.constructor


    class Response extends _OriginResponse{
        
        sendFile( filename = '' ){
            let res = this
            readFile( filename, ( err, content ) => {
                if( err ){
                    console.log( err )
                    res.end( JSON.stringify( err ) )
                    return
                }
                res.end( content )
            })
        }

    }

    res.__proto__ = Response.prototype

    return res

}
