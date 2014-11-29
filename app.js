/************Main app initiator***********/
var utils = require( "./app/utils/utils" );
var feature = require( './config/featureSwitch' );
var _ = require( "lodash" ); // Utility library

//Set app root folder
var path = require( 'path' ),
    appRoot, pathConfig;
appRoot = global.appRoot = path.normalize( __dirname );
// Module paths config
pathConfig = global.pathConfig = require( './root' );

if ( _.isEmpty( pathConfig ) ) {
    return;
}

/*** Module dependencies.**************/

var express = require( 'express' );
var fs = require( 'fs' );
var pLogger = require( pathConfig.logger )( "product", "ALL" );
var uLogger = require( pathConfig.logger )( "user", "ALL" );


/********** Load Configurations*******/

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require( pathConfig.config );
var auth = require( pathConfig.authorization );
var db = require( pathConfig.sequelize );
var passport = require( pathConfig.passport );

var app = express();

//Initialize Express
require( pathConfig.express )( app, passport );

//Initialize Routes
require( pathConfig.routes ).init( app, passport, auth );

//Start the app - Default port set: 3000
var port = process.env.PORT || config.port;
app.listen( port );

//expose app
exports = module.exports = app;
