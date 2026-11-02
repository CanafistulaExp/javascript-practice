/*
Exercício:
Crie um programa que receba um array de strings como entrada (fornecido)
e imprima um novo array contendo apenas as palavras com mais de 5 caracteres.
*/

let nomes = ["Fred", "Robert", "Thalya", "Bob", "Carl", "Sammuel"];

function contLetras(arr){
    
  const count = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].length > 5) {
    
      count.push(arr[i]);
    
    }
  }

  return count;
}
