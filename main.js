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

//==================================Slasher Flick
//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
    arr = arr.slice(howMany);
    console.log(arr);
}

// slasher([1, 2, 3], 2)

//==================================Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    var firstElement = arr[0].toLowerCase();    
    var secondElement = arr[1].toLowerCase().split("");
    console.log(firstElement);
    console.log(secondElement);
    for(i = 0; i < secondElement.length; i++) {
        if(firstElement.indexOf(secondElement[i]) === -1) {
            console.log("false");
            return false;        
        }
    }
    return true;
}

// mutation(["Hello", "Heyo"]);

//==================================Falsy Bouncer
//Remove all falsy values from an array


function bouncer(arr) {
    var result = [];
    result = arr.filter(Boolean);
    return (result);
}

// bouncer([7, "ate", "", false, 9]);

//==================================Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    console.log(typeof args);
    var newArr = arr.filter(function(val){
        return !args.includes(val);
    });
    console.log(newArr);
    return newArr;
  }

// destroyer([1, 2, 3, 1, 2, 3],1, 3);

//====================================Where do I belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//The returned value should be a number.

function getIndexToIns(arr, num){
    var newArr = arr.push(num);
    newArr = arr.sort(function(a,b){
        return a - b;
    });
    var index = newArr.indexOf(num);
    console.log(newArr);
    console.log(index);
    return index;
}

// getIndexToIns([9,3,6,8],4);

//=====================================Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
//In a shift cipher the meanings of the letters are shifted by some set amount.

function rot13(str) {
    var firstArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var secondArr = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var strArr = str.toUpperCase().split("");
    console.log(strArr);
    for(var i = 0; i < strArr.length; i++) {
        if(firstArr.includes(strArr[i])) {
            var index1 = firstArr.indexOf(strArr[i]);
            strArr[i] = secondArr[index1];
        } else if (secondArr.includes(strArr[i])){
            var index2 = secondArr.indexOf(strArr[i]);
            strArr[i] = firstArr[index2];
        }
    }
    console.log(strArr.join(""));
    return strArr;
}

// rot13("SERR PBQR PNZC");

//===========================================Intermediate algorithm

//===========================Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
    var sum = 0;
    arr = arr.sort(function(a,b) {
        return a-b;
    });
    for (var i = arr[0]; i <= arr[1]; i++){
        sum += i;
    }
    console.log(sum);
    return sum; 
}

// sumAll([4,1]);

//================================Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2){
    var newArray = arr1.concat(arr2);
    var filterArray1, filterArray2, result;
    filterArray1 = newArray.filter(function(val) {
        return !(arr1.indexOf(val)  >= 0)
    });
    filterArray2 = newArray.filter(function(val) {
        return !(arr2.indexOf(val)  >= 0)
    });
    
    result = filterArray1.concat(filterArray2);
    console.log(newArray);
    console.log(result);
    return result;
}

// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

//================================Roman Numeral Converter
//Convert the given number into a roman numeral.

function convertToRoman(num){
    var result = 0;
    

    console.log(result);
    return result;
}

convertToRoman(36);