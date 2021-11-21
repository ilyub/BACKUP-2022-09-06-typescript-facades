import * as reflect from "@skylib/functions/dist/reflect";

import { icons } from "@/icons";

it("all", () => {
  const excerpt1 = icons.createExcerpt([], true);

  const excerpt2 = icons.createExcerpt([], false);

  const excerpt3 = icons.createExcerpt(["sampleIcon"], true);

  const excerpt4 = icons.createExcerpt(["sampleIcon"], false);

  icons.setImplementation({ sampleIcon: "sample-icon" });

  {
    expect(reflect.get(excerpt1, "__key")).toBeUndefined();
    expect(reflect.get(excerpt2, "__key")).toBeUndefined();
    expect(reflect.get(excerpt3, "__key")).toBeUndefined();
    expect(reflect.get(excerpt4, "__key")).toBeUndefined();
  }

  {
    expect(() => reflect.get(excerpt1, "sampleIcon")).toThrow(
      new Error("Unknown key: sampleIcon")
    );
    expect(reflect.get(excerpt2, "sampleIcon")).toStrictEqual("sample-icon");
    expect(reflect.get(excerpt3, "sampleIcon")).toStrictEqual("sample-icon");
    expect(reflect.get(excerpt4, "sampleIcon")).toStrictEqual("sample-icon");
  }

  {
    const expected = {
      configurable: true,
      enumerable: true,
      value: "sample-icon",
      writable: true
    };

    expect(
      Object.getOwnPropertyDescriptor(excerpt1, "sampleIcon")
    ).toStrictEqual(expected);
  }
});
