const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrBinary = [];
  let arrMorse = [];
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    arrBinary.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < arrBinary.length; i++) {  
    arrMorse[i] = '';
    for (let j = 0; j < 10; j += 2) {
      let current = (arrBinary[i][j] + arrBinary[i][j + 1]);
      if ((current) === '00') {
        arrMorse[i] += ''
      }
      if ((current) === '10') {
        arrMorse[i] += '.'
      }
      if ((current) === '11') {
        arrMorse[i] += '-'
      }
    }
  }

  for (let i = 0; i < arrMorse.length; i++) {
    if (arrMorse[i] !== '') {
      result += MORSE_TABLE[arrMorse[i]];
    } else {
      result += ' '
    }
  }
  return result
}

module.exports = {
    decode
}