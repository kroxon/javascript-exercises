function clearText(string) {
    return Array.from(string)
        .filter(symbol => (/[a-zA-Z0-9]/).test(symbol))
        .map(symbol => {
            if ((/[a-zA-Z]/).test(symbol))
                return symbol.toLowerCase();
            else
                return symbol;
        });
}

function reverseString(array) {
    const tempArray = array.slice();
    for (i = 0; i < array.length; i++) {
        tempArray[i] = array[array.length - 1 - i];
    }
    return tempArray;
}

const palindromes = function (string) {
    return clearText(string).join('') == reverseString(clearText(string)).join('');
};

// Do not edit below this line
module.exports = palindromes;
