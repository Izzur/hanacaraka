import { encode, decode } from "../src";

test("Encode latin to hanacaraka", () => {
  expect(encode("HANACARAKA")).toBe("\uA9B2\uA9A4\uA995\uA9AB\uA98F");
  expect(encode("1234567890")).toBe(
    "\uA9D1\uA9D2\uA9D3\uA9D4\uA9D5\uA9D6\uA9D7\uA9D8\uA9D9\uA9D0"
  );
});

test("Decode hanacaraka to latin", () => {
  expect(decode("\uA9B2\uA9A4\uA995\uA9AB\uA98F")).toBe("HANACARAKA");
});

test("Consistent result back and forth", () => {
  expect("HANACARAKA").toBe(decode(encode("HANACARAKA")));
});
