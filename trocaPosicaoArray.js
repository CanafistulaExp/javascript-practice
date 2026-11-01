function swapEnds(arr){
  
  let x = arr.pop();
  let y = arr.shift();
    
  arr.unshift(x);
  arr.push(y);
    
  return arr;
}

console.log(swapEnds([1, 2, 3, 4, 5, 6]));
