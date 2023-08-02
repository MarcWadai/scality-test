'use strict'
/* Question 1: Asynchronous File Reading
Write a Node.js function that reads a text file and prints its content to the console. 
The function should handle errors gracefully and log an appropriate error message if 
the file does not exist or cannot be read.

Function Signature:
*/
const fs = require('fs');
const pathCorrect = './assets/question_1_asset.txt'
const pathNotExit = './assets/question_1_notffound.txt'
const pathUnauthorized = './assets/question_1_root.txt'

function errorMessage(err) {
    const codes = {
        'ENOENT': 'The file you are trying to read does not exit',
        'EACCES': 'You are not authorized to access this file',
        'default': 'An error as occured while reading the file'
    }
    return codes[err.code] || codes['default']
}

function readFileAndPrint(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
      } catch (err) {
        console.error(errorMessage(err));
      }
      
}



readFileAndPrint(pathCorrect)
console.log('\n')
readFileAndPrint(pathNotExit)
console.log('\n')
readFileAndPrint(pathUnauthorized)