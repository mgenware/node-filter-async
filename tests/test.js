const fs = require('fs');
const assert = require('assert');
const { filterAsync } = require('..');
const nodepath = require('path');
const { promisify } = require('util');

const statAsync = promisify(fs.stat);
const readdirAsync = promisify(fs.readdir);

describe('filterAsync', () => {
  it('Case 1', async () => {
    const dataDir = nodepath.join(__dirname, 'data');
    const paths = await readdirAsync(dataDir);

    // try to remove the .DS_Store in macOS
    const index = paths.indexOf('.DS_Store');
    if (index >= 0) {
      paths.splice(index, 1);
    }

    assert.deepEqual(paths.sort(), ['dir1', 'dir2', 'a.txt', 'b.txt'].sort());

    const files = await filterAsync(paths, async (path) => {
      const stat = await statAsync(nodepath.join(dataDir, path));
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

  it('Indices', async () => {
    const nums = [1, 2, 3, 4];
    const indices = {};
    await filterAsync(nums, (n, i) => {
      indices[i] = true;
      return Promise.resolve(n % 2 === 0);
    });

    assert.deepEqual(Object.keys(indices).sort(), [0, 1, 2, 3]);
  });
});
