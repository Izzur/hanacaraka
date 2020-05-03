import { encode, decode } from "../src";

test("Encode latin to hanacaraka", () => {
  expect(encode("HANACARAKA")).toBe("\uA9B2\uA9A4\uA995\uA9AB\uA98F");
});

test("Decode hanacaraka to latin", () => {
  expect(decode("\uA9B2\uA9A4\uA995\uA9AB\uA98F")).toBe("HANACARAKA");
});

test("Consistent result back and forth", () => {
  expect("HANACARAKA").toBe(decode(encode("HANACARAKA")));
});
