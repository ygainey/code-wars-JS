function reverseWords(str) {
    return str
    .split(' ')            // Split by spaces
    .map(word => word.split('').reverse().join(''))  // Reverse each word
    .join(' ');   
}