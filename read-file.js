const fs = require( 'fs' )

exports.readFile = ( filename, cb = () => 0 ) => {
    fs.readFile( filename, 'utf-8', cb )
}
