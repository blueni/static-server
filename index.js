#!/usr/bin/env node

const http = require( 'http' )
const path = require( 'path' )
const ParseURL = require( './parse-url.js' )
const extendsResponse = require( './response.js' )

const PORT = 8090

http.createServer( ( req, res ) => {
    extendsResponse( res )
    
    let parsedUrl = new ParseURL( req.url )
    let filename = path.join( __dirname, parsedUrl.getFileName() )
    res.sendFile( filename )
}).listen( PORT )

console.log( `server run at port ${PORT}` )
