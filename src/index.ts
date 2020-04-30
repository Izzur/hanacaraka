import { letters } from "./dict";

/**
 * Change javanese script into corresponding latin character
 * @param script single word in javanese script
 */
export function decode(script: string) {
  const output = script.split("").map(fromJavanese);
  return output.join("").toUpperCase();
}

/**
 * Change latin character into corresponding javanese script
 * @param text single word in latin character
 */
export function encode(text: string) {
  const syllables = splitSyllable(text);
  const output = syllables.map(toJavanese);
  return output.join("");
}

function fromJavanese(syllable: string) {
  const index = letters.map((x) => x.value).indexOf(syllable);
  return letters[index].transc;
}

function toJavanese(syllable: string) {
  const index = letters.map((x) => x.transc).indexOf(syllable);
  if (index < 0) return "";
  return letters[index].value;
}

function splitSyllable(word: string) {
  const regex = /(?<=[bcdfghjklmnpqrstvwxyz][aiueo])/;
  return word.split(regex);
}
