# @devmoath/ar-num-to-en-num [![Node.js Package](https://github.com/DevMoath/ar-num-to-en-num/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/DevMoath/ar-num-to-en-num/actions/workflows/npm-publish.yml) ![npm](https://img.shields.io/npm/dt/@devmoath/ar-num-to-en-num)

Convert Arabic numbers to English numbers

## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @devmoath/ar-num-to-en-num

# Using Yarn
yarn add @devmoath/ar-num-to-en-num
```

## Usage

```javascript
// es module import:
import convert from '@devmoath/ar-num-to-en-num';

// commonjs import:
const convert = require('@devmoath/ar-num-to-en-num').default;

convert('test ١٢٣'); // test 123
convert('كلمة ١٢٣'); // كلمة 123

// if you pass non-string value the function will return false
convert({}); // false
convert([]); // false
```
