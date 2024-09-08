var fs = require('fs');
var input = fs.readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(item => parseFloat(item)).sort((a, b) => b -a );

if (A >= B + C) {
  console.log('NAO FORMA TRIANGULO');
}
else { 
if (A * A === B * B + C * C) {
  console.log('TRIANGULO RETANGULO');
}
else if (A * A > B * B + C * C) {
  console.log('TRIANGULO OBTUSANGULO');
}
else if (A * A < B * B + C * C) {
  console.log('TRIANGULO ACUTANGULO');
}
else if (A === B && B === C) {
  console.log('TRIANGULO EQUILATERO');
}
else if (A === B && A !== C || A === C && A !== B || B === C && B !== A) {
  console.log('TRIANGULO ISOSCELES');
}
}