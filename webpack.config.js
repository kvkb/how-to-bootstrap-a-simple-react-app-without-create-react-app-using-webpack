
//--- global nodejs library
var path = require("path");

//---- this folder will be created by webpack during build process, we are just referencing it
var DIST_DIR = path.resolve(__dirname,"dist");

//----- this folder tells webpack where it can find all the untranspiled code which is our soource code in "src" directory
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
    entry : SRC_DIR + "/app/index.js",
    output : {
        path : DIST_DIR + "/app",
        filename : "bundle.js",
        publicPath : "/app"
    },
    module : {
        loaders : [
            {
                test: /\.js?/,
                include : SRC_DIR,
                loader : "babel-loader",
                query : {
                    presets : ["react","es2015","stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
