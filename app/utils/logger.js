var log4js = require( 'log4js' );

log4js.configure( {
    appenders: [ {
        type: 'console'
    }, {
        type: 'file',
        filename: './logs/product.log',
        category: 'product'
    }, {
        type: 'file',
        filename: './logs/user.log',
        category: 'user'
    } ]
} );


/******************
Log4js Log Levels :

Log4js.Level	Description
OFF				nothing is logged
FATAL			fatal errors are logged
ERROR			errors are logged
WARN			warnings are logged
INFO			infos are logged
DEBUG			debug infos are logged
TRACE			traces are logged
ALL				everything is logged

******************/

module.exports = function( category, level ) {
    var logger = log4js.getLogger( category );
    logger.setLevel( level );
    return logger;
};
