const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR';
    }
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
 

// Do not edit below this line
module.exports = sumAll;
