# node-filter-async

[![Build Status](https://travis-ci.org/mgenware/node-filter-async.svg?branch=master)](http://travis-ci.org/mgenware/node-filter-async)
[![npm version](https://badge.fury.io/js/node-filter-async.svg)](https://badge.fury.io/js/node-filter-async)
[![Node.js Version](http://img.shields.io/node/v/node-filter-async.svg)](https://nodejs.org/en/)


[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/node-filter-async.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/node-filter-async)
[![npm version](https://img.shields.io/npm/v/node-filter-async.svg?style=flat-square)](https://npmjs.com/package/node-filter-async)
[![Node.js Version](http://img.shields.io/node/v/node-filter-async.svg?style=flat-square)](https://nodejs.org/en/)

Filter array elements with Promises.

### Installation

```bash
npm install --save node-filter-async
yarn add node-filter-async
```

## Usage

### API

```javascript
function filterAsync<T>(array: T[], callback: (value: T, index: number) => Promise<boolean>): Promise<T[]>;
```

JavaScript:

```javascript
const { filterAsync } = require('node-filter-async');

(async () => {
  const results = await filterAsync(someArray, async (value) => {
    return await asyncFunc(value) === 'blablabla';
  });
})();
```

TypeScript:

```typescript
import { filterAsync } from 'node-filter-async';

(async () => {
  const results = await filterAsync(someArray, async (value) => {
    return await asyncFunc(value) === 'blablabla';
  });
})();
```
