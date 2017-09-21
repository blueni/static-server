const url = require( 'url' )

class ParseURL{

    constructor( str = '' ){
        this.originUrl = str
        this.parsedUrl = url.parse( str )
    }

    getFileName(){
        return this.parsedUrl.pathname        
    }

}

module.exports = ParseURL

let uri = 'http://www.baidu.com/a/b/app.js'
let pUrl = new ParseURL( uri )

console.log( '测试链接：', uri )
console.log( '对应文件名是：',  pUrl.getFileName() )