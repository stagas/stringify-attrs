
# stringify-attrs

serialize an object into an html attributes string

## example

```js
var stringify = require('stringify-attrs');

var res = stringify({ foo: 'bar', baz: 'zo"o', flag: '' });

console.log(res); // foo="bar" baz="zo&quot;o" flag
```

## License

MIT
