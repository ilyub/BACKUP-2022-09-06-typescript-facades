import * as reflect from "@skylib/functions/dist/reflect";

import type { Facade } from "@/lang";
import { lang } from "@/lang";

it("all", () => {
  const excerpt1 = lang.createExcerpt([], true);

  const excerpt2 = lang.createExcerpt([], false);

  const excerpt3 = lang.createExcerpt(["SampleWord"], true);

  const excerpt4 = lang.createExcerpt(["SampleWord"], false);

  lang.setImplementation({ SampleWord: "sample-word" } as Facade);

  {
    expect(reflect.get(excerpt1, "__key")).toBeUndefined();
    expect(reflect.get(excerpt2, "__key")).toBeUndefined();
    expect(reflect.get(excerpt3, "__key")).toBeUndefined();
    expect(reflect.get(excerpt4, "__key")).toBeUndefined();
  }

  {
    expect(() => reflect.get(excerpt1, "SampleWord")).toThrow(
      new Error("Unknown key: SampleWord")
    );
    expect(reflect.get(excerpt2, "SampleWord")).toStrictEqual("sample-word");
    expect(reflect.get(excerpt3, "SampleWord")).toStrictEqual("sample-word");
    expect(reflect.get(excerpt4, "SampleWord")).toStrictEqual("sample-word");
  }

  {
    const expected = {
      configurable: true,
      enumerable: true,
      value: "sample-word",
      writable: true
    };

    expect(
      Object.getOwnPropertyDescriptor(excerpt1, "SampleWord")
    ).toStrictEqual(expected);
  }
});
