/********Common path mapper****************/

/********Only user modules need to be configured*/


if ( !global.appRoot ) {
    console.error( "'appRoot' variable is not set. Please set the root directory path to global." );
    module.exports = {};
    return;
} else {
    appRoot = global.appRoot + "/";
}

function rootPathAdder( obj, appRoot ) {
    for ( key in obj ) {
        if ( obj.hasOwnProperty( key ) && key !== "appRoot" ) {
            obj[ key ] = appRoot + obj[ key ];
        }
    }
    return obj;
}

/***Please add a custom user module path relative to root folder*****/

var configPaths = {
    /*Do not change appRoot*/
    appRoot: appRoot,
    app: "app",
    all: "config/env",
    root: "root",
    config: "config/config",
    authorization: "config/middlewares/authorization",
    sequelize: "config/sequelize",
    passport: "config/passport",
    express: "config/express",
    routes: "config/routes",
    utils: "app/utils/utils",
    featureSwitch: "config/featureSwitch",
    logger: "app/utils/logger"
};


module.exports = rootPathAdder( configPaths, appRoot );
