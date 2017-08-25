// Excer ofalgorithm scripting on free code camp
// ================================ Reverse string
// Reverse a String 
/* function revStr(str) {
    str = str.split("");
    str = str.reverse().join("");
    console.log(str);
}

revStr("Hello"); */

// ================================ Factorialize number
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

// ================================Check for Palindromes

/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */
/* var str = process.argv[2];
function palindrome(str) {
    var strReverse;
    strReverse = str.replace(/[\W]_/g, ""); //replace special character
    console.log(strReverse);
    strReverse = strReverse.toLowerCase().split("");  //turn into anarray
    strReverse = strReverse.reverse().join("");  //reverse array and turn into string
    if(strReverse === str.replace(/\W/, "").toLowerCase()) {
        console.log("The world " + str + " is palindromes");
    } else {
        console.log("The world " + str + " is NOT palindrome");
    }
}
palindrome(str); */

// ================================Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.

var sentence = process.argv[2];
function findLongestWord(sentence) {
    var arr;
    var index = 0;
    arr = sentence.split(" ");
    console.log(arr);
    for(i = 0; i < arr.length; i++) {
        if(arr[index].length < arr[i].length) {
            index = i;
        }
    }
    console.log(arr[index].length);
}
findLongestWord(sentence);