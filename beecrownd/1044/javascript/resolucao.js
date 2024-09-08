var fs = require('fs');
var input = fs.readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift().split(' ');

var A = parseInt(entrada[0]); 
var B = parseInt(entrada[1]); 

if (A % B === 0 || B % A === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}
