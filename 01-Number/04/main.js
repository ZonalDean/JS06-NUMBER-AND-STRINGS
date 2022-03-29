let decimalSecond = num => {
    num = Math.trunc(num*100)/100
    num = num.toFixed(2)
    return num
}

console.log(decimalSecond(10));
console.log(decimalSecond(5.1));
console.log(decimalSecond(3.1289));