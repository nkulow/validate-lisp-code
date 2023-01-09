import { validateParentheses } from "./validate-parentheses.js";

describe ('validate LISP parentheses', () => {
    
    test('should return true for valid LISP code', () => {
        expect(validateParentheses('(valid () test)')).toEqual(true);
    });

    test('should return false for invalid LISP code', () => {
        expect(validateParentheses('(valid (() test)')).toEqual(false);
    });
});