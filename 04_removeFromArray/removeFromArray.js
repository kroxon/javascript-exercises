const removeFromArray = function (array = [], ...args) {
    newArray = [];
    const arrayLength = array.length;
    for (i = 0; i < arrayLength; i++) {
        let element = array.pop();
        if (!args.includes(element))
            newArray.unshift(element)
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
