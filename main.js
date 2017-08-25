// Excer ofalgorithm scripting on free code camp
// ================================
// Reverse a String 
/* function revStr(str) {
    str = str.split("");
    str = str.reverse().join("");
    console.log(str);
}

revStr("Hello"); */

// ================================
// Factorialize a Number
/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. */

/* function factorialNum(n) {
    var result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}
factorialNum(5); */

// ================================

/* 
Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */
var str = process.argv[2];
function palindrome(str) {
    var strReverse;
    strReverse = str.split("");
    strReverse = strReverse.reverse().join("");
    if(strReverse === str) {
        console.log("The world " + str + " is palindromes");
    } else {
        console.log("The world " + str + " is NOT palindrome");
    }
}
palindrome(str);
