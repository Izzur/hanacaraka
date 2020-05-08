import {
  fromJavanese,
  toJavanese,
  splitSyllable,
  vowelify,
  getSymbolFrom,
  getTranscFrom,
} from "../src/util";
import { letters } from "../src/dict";

test("Split single word into array of syllable", () => {
  expect(splitSyllable("basajawa")).toStrictEqual(["ba", "sa", "ja", "wa"]);
});

test("Transliterate single syllable from latin to javanese", () => {
  expect(toJavanese("ha")).toBe("\uA9B2");
});

test("Transliterate single syllable from javanese to latin", () => {
  expect(fromJavanese("\uA9B2")).toBe("ha");
});

test("Add vowel symbol to letter", () => {
  expect(vowelify("\uA9B2", "i")).toBe("\uA9B2\uA9B6");
});

test("Find and return symbol from dictionary", () => {
  expect(getSymbolFrom(letters, "ha")).toBe("\uA9B2");
});

test("Find and return transcription from dictionary", () => {
  expect(getTranscFrom(letters, "\uA9B2")).toBe("ha");
});
