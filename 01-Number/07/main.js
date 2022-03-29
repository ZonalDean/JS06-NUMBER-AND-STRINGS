// function dice() {
//     let final = Math.random();
//     final = final * 10;
//     for ( final ; final >= 6  ; final--) {
//         if (final === 0) {
//             final++;
//         }
//     }
//     return Math.trunc(final);
// }

function dice() {
    return Math.ceil(Math.random()*6)
}

console.log(dice());

console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());