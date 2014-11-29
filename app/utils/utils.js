/**
 * Generic switcher method to check the truthy
 */
exports.isTrue = function( arg, callbackTrue, callbackFalse ) {
    if ( arg ) {
        callbackTrue();
    } else {
        callbackFalse();
    }
};

exports.isEmptyObj = function( obj ) {
    return !Object.keys( obj ).length;
};


exports.isEmptyObjES3 = function( obj ) {
    for ( var key in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, key ) ) {
            return false;
        }
    }
    return true;
};
