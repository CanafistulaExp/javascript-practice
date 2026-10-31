let num = 73;
//Atualização do código
function fizzBuzz(num){

    console.log('Welcome to FizzBuzz!');

    for (let i = 1; i <= num; i++){
        //O desafio solicitou a inclusão dessa condição e eu coloquei o comando parseInt para garantir o resultado certo.
        if(String(i).includes('3') && parseInt(i) % 3 != 0 && parseInt(i) % 7 != 0){

            console.log('Almost Fizz');

        } else if (parseInt(i) % 3 == 0 && parseInt(i) % 7 == 0){

            console.log('FizzBuzz');

        } else if (parseInt(i) % 3 == 0){

            console.log('Fizz');

        } else if (parseInt(i) % 7 == 0){

            console.log('Buzz');

        } else{

            console.log(i);
        }
    }
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
