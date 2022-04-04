function isCensored(str) {
    if (str.search(/xxx|sex|porn/i) !== -1) return true
    return false;
}

const checkCensor = str => {
    const low = str.toLowwrCase()
    if (low.includes('xxx')) return true; // can be partially turned into an array
    if (low.includes('porn')) return true;
    if (low.includes('sex')) return true;
    return false;
}