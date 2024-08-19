const repeatString = function (word, times) {
    if(times < 0) 
        return "ERROR"
    let returnValue = '';
    for(i = 0; i < times; i++){
        returnValue += word;
    }
    return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
