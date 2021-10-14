import { promises as fsPromises } from 'fs';
import * as assert from 'assert';

it('Verify type definition files', async () => {
  assert.ok((await fsPromises.stat('./dist/main.d.ts')).isFile());
});
