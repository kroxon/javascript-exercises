const getTheTitles = function (array) {
    return array.reduce((accu, cur) => {
        accu.push(cur.title);
        return accu;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
