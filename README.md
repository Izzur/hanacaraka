# Hanacaraka

Hanacaraka (&#43442;&#43428;&#43413;&#43435;&#43407;) or Javanese script is writing system of Javanese language.  
This library help transliterate input string to its Hanacaraka equivalent and vice versa.

## Usage

```js
const hc = require('hanacaraka');

const javenese = hc.encode('carakan'));  // ꦕꦫꦏꦤ꧀

const latin = hc.decode('ꦕꦫꦏꦤ꧀'); // carakan
```

## References

- https://www.unicode.org/charts/PDF/UA980.pdf
- https://en.wikipedia.org/wiki/Javanese_script