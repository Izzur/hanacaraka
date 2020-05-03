# Hanacaraka

[![Build Status](https://travis-ci.org/Izzur/hanacaraka.svg?branch=master)](https://travis-ci.org/Izzur/hanacaraka)

Hanacaraka (&#43442;&#43428;&#43413;&#43435;&#43407;) is Javanese script writing system used in Javanese language.  
This library help transliterate input string to its Hanacaraka equivalent and vice versa.

## Usage

```js
const hc = require('hanacaraka');

const javanese = hc.encode('BASAJAWA');  // ꦧꦱꦗꦮ

const latin = hc.decode('ꦧꦱꦗꦮ'); // BASAJAWA
```

## References

- https://www.unicode.org/charts/PDF/UA980.pdf
- https://en.wikipedia.org/wiki/Javanese_script