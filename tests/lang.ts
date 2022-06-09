import { lang } from "@";

test("plain", () => {
  expect(lang.plain("str1")).toStartWith("plain:str1");
  expect(lang.plain("str2")).toStartWith("plain:str2");
});
