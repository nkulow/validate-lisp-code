import { fileReader } from './utils/file-reader.js';
import { validateParentheses } from './validate-parentheses.js';

fileReader('./sample-lisp-code/', (file, data) => {
    console.log(`File ${file} is ${validateParentheses(data) ? 'valid.' : 'invalid.'}`);
});