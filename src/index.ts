import dict from "./dict";

export function encode(params: String) {
  toJavanese();
  return params;
}

export function decode(params: String) {
  const output = params.split("").map(fromJavanese);
  return output.join("").toUpperCase();
}

function toJavanese() {}

function fromJavanese(letter) {
  const index = dict.map((x) => x.value).indexOf(letter);
  return dict[index].transc;
}
