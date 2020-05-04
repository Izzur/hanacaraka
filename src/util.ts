import { letters } from "./dict";

export function fromJavanese(syllable: string) {
  const index = letters.map((x) => x.value).indexOf(syllable);
  return letters[index].transc;
}

export function toJavanese(syllable: string) {
  const combined: string[] = [];
  const index = letters.map((x) => x.transc).indexOf(syllable);
  if (index < 0) return "";
  combined.push(letters[index].value);
  return combined.join("");
}

export function splitSyllable(word: string) {
  const regex = /(?<=[bcdfghjklmnpqrstvwxyz][aiueo])/;
  return word.split(regex);
}
