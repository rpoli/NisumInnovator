/**
 * Generic switcher method to check the truthy
 */
exports.isTrue = function(arg , callbackTrue, callbackFalse) {
    if (arg) {
        callbackTrue();
    }else{
    	callbackFalse();
    }
};