import { fromJavanese, toJavanese, splitSyllable } from "../src/util";

test("Split single word into array of syllable", () => {
  expect(splitSyllable("basajawa")).toStrictEqual(["ba", "sa", "ja", "wa"]);
});

test("Transliterate single syllable from latin to javanese", () => {
  expect(toJavanese("ha")).toBe("\uA9B2");
});

test("Transliterate single syllable from javanese to latin", () => {
  expect(fromJavanese("\uA9B2")).toBe("ha");
});
