function truncate(str, length) {
    if (str.length > length) {
        str = str.slice(0, length -1) + "..."
    }
    return str;
};