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
var convertToRoman = function(num) {
      var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
      var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
      var romanized = '';
    
      for (var index = 0; index < decimalValue.length; index++) {
        console.log(index);        
        while (decimalValue[index] <= num) {   //ex: num = 11
          romanized += romanNumeral[index];
          console.log(index + " romanized " + romanized)
          num -= decimalValue[index];
          console.log(index + " num " + num)
          
        }
      }
    //   console.log(romanized);
      return romanized;
    }

// convertToRoman(6);

//================================Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of
//all objects that have matching property and value pairs (second argument). 
//Each property and value pair of the source object has to be present in the object from the 
//collection if it is to be included in the returned array.

function whatIsInAName(collection, source){
    var keySource = Object.keys(source);
    var result;
    // console.log(keySource);
    result = collection.filter(function(obj){
        for(var i = 0; i < keySource.length; i++){
            if(!obj.hasOwnProperty(keySource[i]) || obj[keySource[i]] !== source[keySource[i]]) {
                return false;
            }
        }
        return true;
    });
    return result;
}

// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//================================Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
function myReplace(str, before, after) {
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    console.log(str.replace(before, after));
  }

//   myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//======================================Pig Latin
// Translate the provided string to pig latin.

function translatePigLatin(str) {
    var firstLetter = str.charAt(0);
    var vowel = /[aeiou]/gi;
    if(str[0].match(vowel)) {
        str = str + "way";
    } else {
        var vowelIndex = str.indexOf(str.match(vowel)[0]);
        console.log(vowelIndex);
        str = str.substring(vowelIndex, str.length - vowelIndex + 2) + str.slice(0, vowelIndex) + "ay" ;
    }
    return(str);
    // console.log(str);
  }
  
//   translatePigLatin("california");

//======================================DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
    var result = [];
    for(var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
            case "C":
                result.push(["C", "G"]);
                break;
        }
    }
    // console.log(result);
    return result;
  }
  
//   pairElement("GTCGA");

//=======================================Missing letters
// Find the missing letter in the passed letter range and return it.
function fearNotLetter(str) {
   for(var i = 0; i < str.length; i ++){
       if(str.charCodeAt(i) !== str.charCodeAt(0) + i) {
           console.log (String.fromCharCode(str.charCodeAt(0) + i));
       }
   }
   return undefined;
  }
  
//   fearNotLetter("abe");

//==========================================Boo who
// /Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof bool === 'boolean';
  }
  
//   booWho(null);

// ============================================Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr1, arr2, arr3) {
    var finalArr = [];
    for(var i = 0; i < arguments.length; i++) {
        var arrArgument = arguments[i];
        for(var j = 0; j < arrArgument.length; j++) {
            var indexValue = arrArgument[j];
            if(finalArr.indexOf(indexValue) < 0) {
                finalArr.push(indexValue);
            }
        }
    }
    // return finalArr;
    console.log(finalArr);
}

// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//==============================================Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
    // &colon;&rpar;
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    
    console.log(str);
    return str;
  }
  
//   convertHTML('Stuff in "quotation marks"');

//================================================Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.toLowerCase().replace(/\s/g,"-").replace(/_/g,"-");
    console.log(str);
    return str;
  }

//   spinalCase('ThisIs Spinal Tap');

//===================================================Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    return num;
  }
  
sumFibs(4);
  
  
