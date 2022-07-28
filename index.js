const phpPlugin  = require("@prettier/plugin-php/standalone");
const standalone = require("prettier/standalone");
const prettier   = require("prettier");

function js( code ,options = {}){
    return prettier.format(code,{ 
        parser            : "babel" ,
        trailingComma     : "none",
        //jsxBracketSameLine: true,  
    ...options});
}
function css( code ,options = {}){
    return prettier.format(code,{ 
        parser            : "css",
    ...options});
}
function html( code ,options = {}){
    return prettier.format(code,{ 
        parser  : "html",
        tabWidth: 4,
        bracketSameLine:true,
        printWidth:200,
    ...options});
}
function php( code, options = {} ){
    return standalone.format(code, {
        plugins           : [phpPlugin],
        parser            : "php",
        "printWidth"      : 80,
        "tabWidth"        : 4,
        "useTabs"         : false,
        "singleQuote"     : true,
        "phpVersion"      : "7.4",
        "trailingCommaPHP": false,
        "braceStyle"      : "psr-2",
        "requirePragma"   : false,
        "insertPragma"    : false,
        ...options
    });
}

function json( code, options = {} ){
    return JSON.stringify(code,null,4)
}

module.exports = { js, php, html, css, json }