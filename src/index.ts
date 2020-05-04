import { fromJavanese, toJavanese, splitSyllable } from "./util";

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
  const syllables = splitSyllable(text.toLowerCase());
  const output = syllables.map(toJavanese);
  return output.join("");
}
