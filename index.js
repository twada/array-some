/**
 * array-some
 *   Array#some ponyfill for older browsers
 *   (Ponyfill: A polyfill that doesn't overwrite the native method)
 * 
 * https://github.com/twada/array-some
 *
 * Copyright (c) 2015-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/array-some/blob/master/MIT-LICENSE
 */
'use strict';

module.exports = function some (ary, callback, thisArg) {
    if (ary.some) {
        return ary.some(callback, thisArg);
    }
    for (var i = 0; i < ary.length; i+=1) {
        if (callback.call(thisArg, ary[i], i, ary)) {
            return true;
        }
    }
    return false;
};
