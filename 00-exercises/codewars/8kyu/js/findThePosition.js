// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Output :: "Position of alphabet: 1"

const position = letter => `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".split('').indexOf(letter) + 1}`;
