const main = require('../..');
import * as assert from 'assert';

describe('require this module', () => {
  it('No exception is thrown', () => {
    assert.equal(typeof main.filterAsync, 'function');
  });
});
