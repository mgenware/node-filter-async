// Node.js 8+
const { filterAsync } = require('..');
const { promisify } = require('util');
const fs = require('fs');
const nodepath = require('path');

const statAsync = promisify(fs.stat);
const readdirAsync = promisify(fs.readdir);

(async () => {
  const dataDir = nodepath.join(__dirname, 'data');
  const paths = await readdirAsync(dataDir);
  console.log(`paths:\n${paths}`);

  const files = await filterAsync(paths, async (path) => {
    const stat = await statAsync(nodepath.join(dataDir, path));
    return stat.isFile();
  });
  console.log(`files:\n${files}`);
})();

