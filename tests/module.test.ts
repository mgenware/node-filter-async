import { promisify } from 'util';
import { stat } from 'fs';
import * as assert from 'assert';
const statAsync = promisify(stat);

it('Verify type definition files', async () => {
  assert.ok((await statAsync('./dist/main.d.ts')).isFile());
});
