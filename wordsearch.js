const transpose = require('./transpose.js');

const wordSearch = (letters, word) => { 
    if (word === undefined) {
        return false;
    }
    const upperCase = word.toUpperCase();
    
    if (upperCase === "") {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(upperCase)) return true
    }
    const verticalLetters = transpose(letters);
    const verticalJoin = verticalLetters.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(upperCase)) return true
    }
return false;
}

module.exports = wordSearch