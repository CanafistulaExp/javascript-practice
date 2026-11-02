/*
Exercício:
Escreva um programa que recebe um array de números como entrada (dado)
e imprime um array dos números que são menores que 50 ou são divisíveis por 5.
Use o método forEach.
*/

let arr = [23, 432, 213, 1234, 5555];

const x = [];

arr.forEach((elemento) => {
    
  if(elemento < 50 || (elemento % 5 === 0)) {
  
    x.push(elemento);
    
  }

})
