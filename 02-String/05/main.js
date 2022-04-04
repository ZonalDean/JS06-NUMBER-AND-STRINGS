function truncate(str, length) {
    if (str.length > length) {
        str = str.slice(0, length -1) + "..."
    }
    return str;
};

function truncate2(str, length) {
    return str.length > length-1 ? str.slice(0, length - 1) + '...' : str;
}

console.log(truncate2("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
console.log(truncate2("Hi everyone!", 20)); // Hi everyone!