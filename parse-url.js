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
