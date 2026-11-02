/*
Exercício:
Escreva uma função chamada processArray que recebe um array de números como argumento. A função deve fazer o seguinte:

Remover o último elemento do array.
Adicionar o número 10 ao final do array.
Verificar se o array inclui o número 5. Se incluir, substitua-o pelo número 50.
Inverter a ordem dos elementos no array.
Retornar o array modificado.
*/

let numeros = [59, 20, 30, 40, 75, 5, 80, 100];

function processArray(arr) {

  //Remove o ultimo elemento;
  arr.pop();
  //Incrementa 10 ao ultimo elemento;
  arr.push(10);
  
  let count = [];
  
  for (let i = 0; i < arr.length; i++) {

    //count receber o array invertido;
    count[i] = arr[(arr.length - i - 1)];
  
        if (count[i] === 5) {
          //troca o numero 5 por 50;
          count[i] = 50;
        }
    
    }
  
  return count;
}
