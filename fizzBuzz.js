let num = 23;
//Atualização do código
function fizzBuzz(num){
    //Decidi incluir um array para essa questão mesmo não sendo solicitado no exercício.
    let arr = [];
    
    console.log('Welcome to FizzBuzz!');
    
    for (let i = 1; i <= num; i++){
    
        //O desafio solicitou a inclusão dessa condição e eu coloquei o comando parseInt para garantir o resultado certo.
        if(String(i).includes('3') && (i) % 3 != 0 && (i) % 7 != 0){

            arr[i-1] = "Almost Fizz";

        } else if (i % 3 == 0 && i % 7 == 0){
            arr[i-1] = 'FizzBuzz';

        } else if (i % 3 == 0){

            arr[i-1] = 'Fizz'

        } else if (i % 7 == 0){

            arr[i-1] = 'Buzz'

        } else{

            arr[i-1] = i
    
        }
        console.log(arr[i-1]);
    }
    
    return arr;
}

fizzBuzz(num);


/* Primeira versão do código
function fizzbuzz(num){
    console.log("Welcome to FizzBuzz!")
    for (let i = 1; i <= num; i++){
        switch (true){
            case (i % 3 == 0 && i % 7 == 0):

                console.log("FizzBuzz")

            break;
            case (i % 3 == 0):

                console.log("Fizz");

            break;
            case (i % 7 == 0):

                console.log("Buzz");

            break;
            default:

            console.log(i);

            break;
        }
    }
}

fizzbuzz(num);*/
