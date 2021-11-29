import { strictEqual } from 'assert';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import { gzipSize } from 'gzip-size';
import TestDirector from 'test-director';
import classNameProp from './index.js';

const testDirector = new TestDirector();

testDirector.add('`classNameProp` with various args.', () => {
  strictEqual(classNameProp(), undefined);
  strictEqual(classNameProp(undefined), undefined);
  strictEqual(classNameProp(null), undefined);
  strictEqual(classNameProp(''), undefined);
  strictEqual(classNameProp(true), undefined);
  strictEqual(classNameProp(undefined, null, '', true), undefined);
  strictEqual(classNameProp('a'), 'a');
  strictEqual(classNameProp('a', 'b', 'c'), 'a b c');
  strictEqual(classNameProp('a b', 'c'), 'a b c');
  strictEqual(classNameProp('a', undefined, 'c'), 'a c');
});

testDirector.add('Bundle.', async () => {
  const {
    outputFiles: [bundle],
  } = await esbuild.build({
    entryPoints: [
      fileURLToPath(
        // eslint-disable-next-line compat/compat
        new URL('./index.js', import.meta.url)
      ),
    ],
    write: false,
    bundle: true,
    minify: true,
    legalComments: 'none',
  });

  const kB = (await gzipSize(bundle.contents)) / 1000;

  console.info(`${kB} kB minified and gzipped bundle.`);

  strictEqual(kB < 0.2, true);
});

testDirector.run();
