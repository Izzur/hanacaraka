import { letters, vowels, digits } from "./dict";

/**
 * Transliterate single syllable from Javanese script to Latin alphabet
 * @param syllable
 */
export function fromJavanese(syllable: string) {
  const base = getTranscFrom(letters, syllable);
  return base;
}

/**
 * Transliterate single syllable from Latin alphabet to Javanese script
 * @param syllable
 */
export function toJavanese(syllable: string) {
  if (/\d/.test(syllable)) return getSymbolFrom(digits, syllable);
  const vowelRegex = /[aiueoĕ]/g;
  const vowel = syllable.match(vowelRegex);
  if (!vowel) return "";
  const base = getSymbolFrom(letters, syllable.replace(vowelRegex, "a"));
  return vowelify(base, vowel[0]);
}

/**
 * Split a word into an array of string
 * @param word single word
 */
export function splitSyllable(word: string) {
  const regex = /(?<=[bcdfghjklmnpqrstvwxyz][aiueo])|(?<=\d)/;
  return word.split(regex);
}

/**
 * Add vowel symbol to letter
 * @param syllable single syllable
 * @param vowel single character of vowel
 */
export function vowelify(syllable: string, vowel: string) {
  const combined: string[] = [syllable];
  switch (vowel) {
    case "i":
    case "u":
    case "e":
    case "ĕ":
      combined.push(getSymbolFrom(vowels, vowel));
      break;
    case "o":
      combined.push(getSymbolFrom(vowels, "e"));
      combined.push(getSymbolFrom(vowels, "aa"));
      break;
    default:
      break;
  }
  return combined.join("");
}

/**
 * Find and return symbol from dictionary
 * @param dictionary category of dictionary
 * @param transc corresponding transcription
 */
export function getSymbolFrom(dictionary: any[], transc: string) {
  const index = dictionary.map((x) => x.transc).indexOf(transc);
  if (index < 0) return "";
  return dictionary[index].value;
}

/**
 * Find and return transcription from dictionary
 * @param dictionary category of dictionary
 * @param symbol corresponding symbol
 */
export function getTranscFrom(dictionary: any[], symbol: string) {
  const index = dictionary.map((x) => x.value).indexOf(symbol);
  if (index < 0) return "";
  return dictionary[index].transc;
}
