var test = require('tape');
var compact = require('../compact-object');

test('compact object', function (t) {
  t.plan(9);

  t.deepEqual(compact(), {});
  t.deepEqual(compact(null), {});
  t.deepEqual(compact(''), {});
  t.deepEqual(compact([]), {});
  t.deepEqual(compact(1), {});
  t.deepEqual(compact(false), {});
  t.deepEqual(compact(true), {});

  var obj1 = {
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

  t.deepEqual(compact(obj1), {
    a: 'b',
    b: false,
    taco: 1,
    qux: 0,
    yo: {
      wut: {
        c: 54
      }
    }
  });

  t.deepEqual(obj1, {
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
  });

});
