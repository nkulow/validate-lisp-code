export const validateParentheses = (data) => {
    var n = 0;
    for (var char of data ) {
        switch(char) {
            case('('):
                n++;
                break;
            case(')'):
                if (n < 0) return false;
                n--;
                break;
        }
    };
    return n === 0;
}