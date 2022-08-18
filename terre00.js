
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let str = "" ; // initialization of the variable str in empty string to be able to insert the elements to concatenate 
for (let i = 0; i < alphabet.length ; i++) { 
    str += alphabet[i];                     // concatenation of $alphabet with str
}

console.log(str);