let diagonalRectangle = area => {
    l = area / 2;
    w = area / 2;
    return Math.sqrt(l**2 + w**2) 
}

console.log(diagonalRectangle(4))