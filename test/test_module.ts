const main = require('../..');
import * as assert from 'assert';
import * as fs from 'fs';

describe('require this module', () => {
  it('No exception is thrown', () => {
    assert.equal(typeof main.filterAsync, 'function');
  });

  it('Check type definition file', () => {
    assert.equal(fs.statSync('./dist/lib/main.d.ts').isFile(), true);
  });
});
