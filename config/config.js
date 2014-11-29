var _ = require( 'lodash' ),
    path = require( 'path' ),
    rootPath = path.normalize( __dirname + '/..' );

var pathConfig = global.pathConfig;


// Load app configuration

var userConfig = {
    // configuration variables that will be the same across all environments
    currentEnv: "development",
    root: rootPath,
    port: process.env.PORT || 3000,
    modelsDir: rootPath + '/app/models'
        // db : process.env.MONGOHQ_URL    
};


// _.assign combines the two objects into a bigger object.

module.exports = _.assign( userConfig,
    // configuration variables that are environment specific
    require( __dirname + '/../config/env/' + process.env.NODE_ENV + '.js' ) || {}
);
