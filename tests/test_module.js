const main = require('..');
const fs = require('fs');
const assert = require('assert');

describe('require this module', () => {
  it('Verify module members', () => {
    assert.equal(typeof main.filterAsync, 'function');
  });

  it('Verify type definition files', () => {
    assert.equal(fs.statSync('./dist/main.d.ts').isFile(), true);
  });
});
