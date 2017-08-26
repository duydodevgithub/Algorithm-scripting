// Excer ofalgorithm scripting on free code camp
// ================================ Reverse string
// Reverse a String 
function revStr(str) {
    str = str.split("");
    str = str.reverse().join("");
    console.log(str);
}

// revStr("Hello");

// ================================ Factorialize number
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
// factorialNum(5);

// ================================Check for Palindromes

/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */
var str = process.argv[2];
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
// palindrome(str);

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
// findLongestWord(sentence);

// ================================Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

var str = process.argv[2];
function titleCase(str) {
    var arr;
    arr = str.toLowerCase().split(" ");
    for(i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i].charAt(),arr[i].charAt().toUpperCase());
    }
    arr = arr.join(" ");
    console.log(arr);
}
// titleCase(str);


// ================================Return Largest Numbers in Arrays

function largestOfFour(arr) {
    var resultArr = [];
    for(i = 0; i < arr.length; i++) {   //loop through array
        var maxNum = 0;
        for(var j = 0; j < arr[i].length; j ++) { //loop through each number in sub array and find maximum one
            if(arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
        }
        resultArr.push(maxNum);
    }
    console.log(resultArr);
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 45, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ==================================Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    var num_target = target.length;
    //get last word of str with target length
    var lastChar = str.substring(str.length - num_target, str.length);
    if(lastChar === target) {
        return true;
        // console.log("True");
    } else {
        return false;
        // console.log("False");
        
    }
    console.log(lastChar);
}

// confirmEnding("Open sesame", "same");

// ================================== Repeat a string repeat a string
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str,num) {
    var output = "";
    for(i = 0; i < num; i++) {
        output += str;
    }
    return output;
}

// repeatStringNumTimes("Hello",3)

// ================================== Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num){ 
    if(num <= 3) {
        str = str.substring(0, num);
        str = str + "...";
    } else if (num < str.length ) {
        str = str.substring(0, num - 3);
        str = str + "...";
    }
    console.log(str);
    return str;
}
// truncateString("A-", 1);

// ================================== Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    for(i = 0; i < arr.length; i+= size) {
        newArr.push(arr.slice(i, size + i));
    }
    console.log(newArr);
    return newArr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

