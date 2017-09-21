const path = require( 'path' )

function br(){
    console.log( '\r\n', '-'.repeat( 40 ), '\r\n' )
}

console.log( '\r\n' )
console.log( '路径名称:', __dirname )
br()

console.log( '文件名称:', __filename )
br()

console.log( '组合路径:', path.join( __dirname, 'index.js' ) )

