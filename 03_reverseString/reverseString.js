const reverseString = function(words = "") {
    revereWords = ""
    for (i = 0; i < words.length; i++) {
        revereWords += words.charAt(words.length - 1 - i)
    }
    return revereWords
};

// Do not edit below this line
module.exports = reverseString;
