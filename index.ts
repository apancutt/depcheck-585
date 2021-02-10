import _ from 'lodash';

type MyObject = {
  foo: string;
};

// Type casting using "brackets" fails

<MyObject>_.assign({}, { foo: 'bar' });

// $ DEBUG=* depcheck
// SyntaxError: Unexpected token, expected "}
// Unused dependencies
// * lodash
// Unused devDependencies
// * @types/lodash

// Type casting using "as" works (comment out line 9 before running depcheck)

_.assign({}, { foo: 'bar' }) as MyObject;

// $ depcheck
// No depcheck issue
