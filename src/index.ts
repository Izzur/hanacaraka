import dict from "./dict";

/**
 * Change javanese script into corresponding latin character
 * @param script
 */
export function decode(script: string) {
  const output = script.split("").map(fromJavanese);
  return output.join("").toUpperCase();
}

/**
 * Change latin character into corresponding javanese script
 * @param text
 */
export function encode(text: string) {
  const syllables = splitSyllable(text);
  const output = syllables.map(toJavanese);
  return output.join("");
}

function fromJavanese(letter: string) {
  const index = dict.map((x) => x.value).indexOf(letter);
  return dict[index].transc;
}

function toJavanese(letter: string) {
  const index = dict.map((x) => x.transc).indexOf(letter);
  if (index < 0) return "";
  return dict[index].value;
}

function splitSyllable(letter: string) {
  const regex = /(?<=[aiueo])/;
  return letter.split(regex);
}
