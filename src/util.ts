import { letters, vowels } from "./dict";

export function fromJavanese(syllable: string) {
  const index = letters.map((x) => x.value).indexOf(syllable);
  return letters[index].transc;
}

export function toJavanese(syllable: string) {
  const vowelRegex = /[aiueoĕ]/g;
  const vowel = syllable.match(vowelRegex);
  if (!vowel) return "";
  const base = getSymbolFrom(letters, syllable.replace(vowelRegex, "a"));
  return vowelify(base, vowel[0]);
}

export function splitSyllable(word: string) {
  const regex = /(?<=[bcdfghjklmnpqrstvwxyz][aiueo])/;
  return word.split(regex);
}

export function vowelify(syllable: string, vowel: string) {
  const combined: string[] = [syllable];
  switch (vowel) {
    case "i":
    case "u":
    case "ĕ":
      combined.push(getSymbolFrom(vowels, vowel));
      break;
    case "e":
      combined.unshift(getSymbolFrom(vowels, vowel));
      break;
    case "o":
      combined.unshift(getSymbolFrom(vowels, "e"));
      combined.push(getSymbolFrom(vowels, "aa"));
      break;
    default:
      break;
  }
  return combined.join("");
}

export function getSymbolFrom(dictionary: any[], symbol: string) {
  const index = dictionary.map((x) => x.transc).indexOf(symbol);
  if (index < 0) return "";
  return dictionary[index].value;
}
