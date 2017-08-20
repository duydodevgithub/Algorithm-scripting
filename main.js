// Excer ofalgorithm scripting on free code camp

// Reverse a String 
function revStr(str) {
    str = str.split("");
    str = str.reverse().join("");
    console.log(str);
}

revStr("Hello");

// Factorialize a Number
/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. */


function factorialNum(n) {
    var result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}
factorialNum(5);
