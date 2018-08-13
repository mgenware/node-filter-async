import * as fs from 'fs';
import * as assert from 'assert';
import { filterAsync } from '../lib/main';
import * as nodepath from 'path';
import { promisify } from 'util';

const statAsync = promisify(fs.stat);
const readdirAsync = promisify(fs.readdir);

describe('filterAsync', () => {
  it('Case 1', async () => {
    const paths = await readdirAsync('./test/data');

    // try to remove the .DS_Store in macOS
    const index = paths.indexOf('.DS_Store');
    if (index >= 0) {
      paths.splice(index, 1);
    }

    assert.deepEqual(paths.sort(), ['dir1', 'dir2', 'a.txt', 'b.txt'].sort());

    const files = await filterAsync(paths, async (path) => {
      const stat: fs.Stats = await statAsync(nodepath.join('./test/data', path));
      return stat.isFile();
    });
    assert.deepEqual(files.sort(), ['a.txt', 'b.txt'].sort());
  });

  it('Case 2', async () => {
    const nums = [1, 2, 3, 4];
    const results = await filterAsync(nums, (n) => {
      return Promise.resolve(n % 2 === 0);
    });

    assert.deepEqual(results, [2, 4]);
  });
  it('Indicies', async () => {
    const nums = [1, 2, 3, 4];
    const indicies: { [key: number ]: boolean} = {};
    await filterAsync(nums, (n, i) => {
      indicies[i] = true;
      return Promise.resolve(n % 2 === 0);
    });

    assert.deepEqual(Object.keys(indicies).sort(), [0, 1, 2, 3]);
  });
});
