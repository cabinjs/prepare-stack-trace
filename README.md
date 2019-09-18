# prepare-stack-trace

[![build status](https://img.shields.io/travis/cabinjs/prepare-stack-trace.svg)](https://travis-ci.org/cabinjs/prepare-stack-trace)
[![code coverage](https://img.shields.io/codecov/c/github/cabinjs/prepare-stack-trace.svg)](https://codecov.io/gh/cabinjs/prepare-stack-trace)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/cabinjs/prepare-stack-trace.svg)](LICENSE)

> `Error.prepareStackTrace` ponyfill for Node.  Made for [Cabin][].


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [Node](#node)
  * [VanillaJS](#vanillajs)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install prepare-stack-trace
```

[yarn][]:

```sh
yarn add prepare-stack-trace
```


## Usage

### Node

```js
const StackFrame = require('stackframe');
const ErrorStackParser = require('error-stack-parser');
const prepareStackTrace = require('prepare-stack-trace');

const err1 = new Error('Oops!');
const err2 = new Error('Error 1 will inherit this stack trace');
err1.stack = prepareStackTrace(err1, ErrorStackParser.parse(err2));

console.log('err1', err1);
console.log('err2', err2);
```

### VanillaJS

```html
<script src="https://unpkg.com/stackframe"></script>
<script src="https://unpkg.com/error-stack-parser"></script>
<script src="https://unpkg.com/prepare-stack-trace"></script>
<script type="text/javascript">
  (function() {
    var err1 = new Error('Oops!');
    var err2 = new Error('Error 1 will inherit this stack trace');
    err1.stack = prepareStackTrace(err1, ErrorStackParser.parse(err2));

    console.log('err1', err1);
    console.log('err2', err2);
  })();
</script>
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[cabin]: https://cabinjs.com
