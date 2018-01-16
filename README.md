# how-to-bootstrap-a-simple-react-app-without-create-react-app-using-webpack
create-react-app is awesome, but of you want to build a simple app with webpack, this is the way 

## Please follow the below terminal commands

// ---- to initialise package.json

$ npm init 

//----- production dependencies

$ npm install react react-dom --save

//----- development dependencies -----
webpack - to build, minify & compile scss & others
webpack-dev-server - for hot reload and env for running react app
babel-loader - for browser support
babel-preset-es2015 - for transpiling es6(es2015) to es5
babel-preset-react - for transpiling reqact code to es5
babel-preset-stage-2 - for structuring & other purposes

$ npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev 

## after installations, please follow the below instructions

-> Add the below commands in package.json in scripts section :

    "start": "npm run build",
    "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",
    "build:prod": "webpack -p && cp src/index.html dist/index.html"

-> after installations, create a src directory for your source code

-> inside src dir, create app directory & an index.html file

-> inside src/app dir, create an index.js file

-> now create a new file "webpack.config.js" in the project directory

-> now copy the webpack.config.js file from the project directory
