function somar(repetições){
    let j = 0;

    while (j < repetições){
        let somarNumeros = 0;
        
        for (let i = 1; i <= 10000; i++){
            somarNumeros += i;
        }
        
        j++;
        console.log(somarNumeros);
    } 
}

let n = 5;

somar(n);