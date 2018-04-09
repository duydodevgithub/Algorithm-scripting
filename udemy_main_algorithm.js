//fizz buzz question

function fizzbuzz(x) {
    if((x % 3) === 0) {
        if( x % 5 === 0) {
            console.log("FizzBuzz");
        }
        console.log("Fizz");
    } else if(x % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for(i = 1; i <= 100; i++) {
    fizzbuzz(i);
}