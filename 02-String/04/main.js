function isCensored(str) {
    if (str.search(/xxx|sex|porn/i) !== -1) return true
    return false;
}