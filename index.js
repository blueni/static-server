#!/usr/bin/env node

const http = require( 'http' )
const path = require( 'path' )
const { readFile } = require( './read-file.js' )

const PORT = 8090

http.createServer( ( req, res ) => {
    let filename = path.join( __dirname, 'static/index.html' )
    readFile( filename, ( err, content ) => {
        res.end( content )
    })
}).listen( PORT )

console.log( `server run at port ${PORT}` )
