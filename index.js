#!/usr/bin/env node

const http = require( 'http' )
const path = require( 'path' )
const { readFile } = require( './read-file.js' )
const ParseURL = require( './parse-url.js' )

const PORT = 8090

http.createServer( ( req, res ) => {
    let parsedUrl = new ParseURL( req.url )
    let filename = path.join( __dirname, parsedUrl.getFileName() )
    readFile( filename, ( err, content ) => {
        if( err ){
            console.log( err )
            res.end( JSON.stringify( err ) )
            return
        }
        res.end( content )
    })
}).listen( PORT )

console.log( `server run at port ${PORT}` )
