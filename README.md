# node-filter-async

[![Build Status](https://github.com/mgenware/node-filter-async/workflows/Build/badge.svg)](https://github.com/mgenware/node-filter-async/actions)
[![npm version](https://img.shields.io/npm/v/node-filter-async.svg?style=flat-square)](https://npmjs.com/package/node-filter-async)
[![Node.js Version](http://img.shields.io/node/v/node-filter-async.svg?style=flat-square)](https://nodejs.org/en/)

Filter array elements with Promises, zero dependencies, written in TypeScript.

### Installation

> v3 is pure ESM. Use `node-filter-async@2` if you are targeting CommonJS.

```bash
npm i node-filter-async
```

## Usage

### API

```javascript
filterAsync<T>(
  // The array to be filtered.
  array: T[],
  // The async filter callback.
  callback: (value: T, index: number) => Promise<boolean>,
): Promise<T[]>;
```

Example:

```js
import filterAsync from 'node-filter-async';

(async () => {
  const results = await filterAsync(someArray, async (value, index) => {
    console.log(`filtering [${index}]: ${value}`);
    return (await asyncFunc(value)) === 'blablabla';
  });
})();
```
