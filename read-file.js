const fs = require( 'fs' )
const path = require( 'path' )

let filename = path.join( __dirname, 'index.js' )

fs.readFile( filename, 'utf-8', ( err, content ) => {
    console.log( content )
})