import { strictEqual } from 'assert'
import TestDirector from 'test-director'
import classNameProp from './index.js'

const testDirector = new TestDirector()

testDirector.add('`classNameProp` with various args.', () => {
  strictEqual(classNameProp(), undefined)
  strictEqual(classNameProp(undefined), undefined)
  strictEqual(classNameProp(null), undefined)
  strictEqual(classNameProp(''), undefined)
  strictEqual(classNameProp(true), undefined)
  strictEqual(classNameProp(undefined, null, '', true), undefined)
  strictEqual(classNameProp('a'), 'a')
  strictEqual(classNameProp('a', 'b', 'c'), 'a b c')
  strictEqual(classNameProp('a b', 'c'), 'a b c')
  strictEqual(classNameProp('a', undefined, 'c'), 'a c')
})

testDirector.run()
