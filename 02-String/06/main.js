function extractCurrencyValue(string, rate) {
    dollarAmt = +string.slice(1);
    bahtAmt = dollarAmt*rate;
    return "THB" + bahtAmt.toString();
}

console.log(extractCurrencyValue('$120', 30));