let arr1 = [1, 2, 3, 4, 5];
let arr2 = [  2, 4, 5];

const count = [];
for (let i = 0; i < arr1.length; i++) {
  //checa os elementos que tem no array 1, mas não tem no array 2 e cria um novo array com os elementos exclusivos.    
  if (arr2.indexOf(arr1[i]) === -1) {
  
    count.push(arr1[i]);
    
  }

}

console.log(count);
