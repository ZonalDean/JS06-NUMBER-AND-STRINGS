let decimalSecond = num => {
    num = Math.trunc(num*100)/100
    num = num.toFixed(2)
    return num
}

let to2Digit = num => {
    const splitted = String(num).split('.');
    if (splitted[1] && splitted[1].length > 2) {
        return splitted [0] + '.' + splitted[1].slice(0,2)
    }
    return num.toFixed(2);
}

console.log(decimalSecond(10));
console.log(decimalSecond(5.1));
console.log(decimalSecond(3.1289));
console.log(to2Digit(10));
console.log(to2Digit(5.1));
console.log(to2Digit(3.1289));