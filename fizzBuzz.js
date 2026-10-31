let num = 21;

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

fizzbuzz(num);