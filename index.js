#!/usr/bin/env node

const http = require( 'http' )
const PORT = 8090

http.createServer( ( req, res ) => {
    res.end( 'hello world!' )
}).listen( PORT )

console.log( `server run at port ${PORT}` )
