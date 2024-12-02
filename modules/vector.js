/*
Chored fae https://github.com/vail-systems/node-fft/blob/master/src/complex.js.
*/

//-------------------------------------------------
// Add two complex numbers
//-------------------------------------------------
export function add(b, a) {
    return [a[0] + b[0], a[1] + b[1]];
}

//-------------------------------------------------
// Subtract two complex numbers
//-------------------------------------------------
export function subtract(b, a) {
    return [a[0] - b[0], a[1] - b[1]];
}

//-------------------------------------------------
// Multiply two complex numbers
//
// (a + bi) * (c + di) = (ac - bd) + (ad + bc)i
//-------------------------------------------------
export function multiply(b, a) {
    return [(a[0] * b[0] - a[1] * b[1]),
            (a[0] * b[1] + a[1] * b[0])];
}

//-------------------------------------------------
// Calculate |a + bi|
//
// sqrt(a*a + b*b)
//-------------------------------------------------
export function magnitude(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}

function rotate180(a) {
    return a < 0.000000001 ?
        a + Math.PI :
        a - Math.PI ;
}

export function angle(vector) {
    return rotate180(Math.atan2(vector[0], vector[1]));
}
