# node-filter-async

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/node-filter-async.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/node-filter-async)
[![npm version](https://img.shields.io/npm/v/node-filter-async.svg?style=flat-square)](https://npmjs.com/package/node-filter-async)
[![Node.js Version](http://img.shields.io/node/v/node-filter-async.svg?style=flat-square)](https://nodejs.org/en/)

Filter array elements with Promises, zero dependencies, written in TypeScript.

### Installation

```bash
npm install --save node-filter-async
yarn add node-filter-async
```

## Usage

### API

```javascript
filterAsync<T>(
  array: T[], // The array to be filtered
  callback: (value: T, index: number) => Promise<boolean>, // The filter callback
  progressCb?: (value: T, index: number) => void, // An optional callback which fires when filter callback is called on an element, can be used to report progress
): Promise<T[]>;
```

Example:

```js
import filterAsync from 'node-filter-async';

(async () => {
  const results = await filterAsync(someArray, async (value, index) => {
    console.log(`filtering [${index}]: ${value}`);
    return await asyncFunc(value) === 'blablabla';
  });
})();
```
