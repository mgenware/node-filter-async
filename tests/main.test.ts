import * as assert from 'assert';
import filterAsync from '../';

async function isEven(n: number): Promise<boolean> {
  return n % 2 === 0;
}

it('Basic', async () => {
  assert.deepEqual(await filterAsync([1, 2, 3, 4, 5], isEven), [2, 4]);
});
