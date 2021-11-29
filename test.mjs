import { strictEqual } from "assert";
import TestDirector from "test-director";
import classNameProp from "./classNameProp.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

const testDirector = new TestDirector();

testDirector.add("`classNameProp` bundle size.", async () => {
  await assertBundleSize(new URL("./classNameProp.mjs", import.meta.url), 160);
});

testDirector.add("`classNameProp` with various args.", () => {
  strictEqual(classNameProp(), undefined);
  strictEqual(classNameProp(undefined), undefined);
  strictEqual(classNameProp(null), undefined);
  strictEqual(classNameProp(""), undefined);
  strictEqual(classNameProp(true), undefined);
  strictEqual(classNameProp(undefined, null, "", true), undefined);
  strictEqual(classNameProp("a"), "a");
  strictEqual(classNameProp("a", "b", "c"), "a b c");
  strictEqual(classNameProp("a b", "c"), "a b c");
  strictEqual(classNameProp("a", undefined, "c"), "a c");
});

testDirector.run();
