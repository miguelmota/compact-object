# compact-object

Returns an object with *non-empty* values only.

# Install

```bash
npm install compactobject
```

```bash
bower install compact-object
```

# Usage

```javascript
var compact = require('compact-object');

var object = {
  a: 'b',
  foo: null,
  b: false,
  taco: 1,
  qux: 0,
  c: '',
  d: [],
  yo: {
    wut: {
      a: null,
      c: 54
    },
    lolz: undefined
  }
};

console.log(compact(object));
//
 {
  a: 'b',
  b: false,
  taco: 1,
  qux: 0,
  yo: {
    wut: {
      c: 54
    }
  }
 }

console.log(compact('non object')); // {}
```

# License

MIT
