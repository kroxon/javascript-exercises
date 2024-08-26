function ageCompare(a, b) {
    if (!a.yearOfDeath)
        a.yearOfDeath = (new Date).getFullYear();
    if (!b.yearOfDeath)
        b.yearOfDeath = (new Date).getFullYear();
    const age1 = a.yearOfDeath - a.yearOfBirth;
    const age2 = b.yearOfDeath - b.yearOfBirth;
    return age1 - age2;
}

const findTheOldest = function (array) {
    const oldest = array.sort(ageCompare);
    return oldest[oldest.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
