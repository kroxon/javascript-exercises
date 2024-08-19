const sumAll = function (firstNumber, secondNumber) {
    try {
        if (firstNumber < 1 || secondNumber < 1 || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber))
            return "ERROR"
        if (firstNumber > secondNumber) {
            let temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp;
        }
        sum = 0
        for (i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
        return sum;
    } catch (error) {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
