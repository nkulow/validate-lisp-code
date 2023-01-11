import { validateParentheses } from "./validate-parentheses.js";

describe ('validate LISP parentheses', () => {
    
    test('should return true for valid LISP code', () => {
        expect(validateParentheses('(valid () test)')).toEqual(true);
    });

    test('should return false for extra open bracket', () => {
        expect(validateParentheses('(valid (() test)')).toEqual(false);
    });

    test('should return false for extra closed bracket', () => {
        expect(validateParentheses('(valid () test))')).toEqual(false);
    });

    test('should return false for reversed bracket', () => {
        expect(validateParentheses(')valid () test))')).toEqual(false);
    });
});