array-some
================================

Array#some ponyfill for older browsers

> Ponyfill: A polyfill that doesn't overwrite the native method


DESCRIPTION
---------------------------------------

Provides `some` function for older browsers, use native implememtation if exists.

It's just like

- [array-foreach](https://www.npmjs.org/package/array-foreach)
- [array-map](https://www.npmjs.org/package/array-map)
- [array-filter](https://www.npmjs.org/package/array-filter)
- [array-reduce](https://www.npmjs.org/package/array-reduce)
- [indexof](https://www.npmjs.org/package/indexof)
- [object-assign](https://www.npmjs.com/package/object-assign)


EXAMPLE
---------------------------------------

```javascript
var some = require('array-some');
var result = some([2, 5, 18, 1, 4], function (element, index, array) {
    return (10 < element);
});
console.log(result); // true
```


INSTALL
---------------------------------------

### via npm

Install

    $ npm install --save array-some

Use

```javascript
var some = require('array-some');
```

### via bower

Install

    $ bower install --save array-some

Load (`some` function is exported)

    <script type="text/javascript" src="./path/to/bower_components/array-some/build/array-some.js"></script>

Use

```javascript
var result = some([2, 5, 18, 1, 4], function (element, index, array) {
    return (10 < element);
});
```


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.
