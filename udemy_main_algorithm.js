function toMilitaryTime(time) {
    let t,hour, minute;
    let result;
    t = time.split(" ");
    hour = parseInt(t[0].split(":")[0]);
    minute = t[0].split(":")[1];
    // console.log(t[1]);
    //AM
    if(t[1] === "AM") {
        if(hour < 10) {
            hour = "0" + hour;
        } else if(hour === 12){
            hour = "00";
        }
    } else if (t[1] === "PM") {
        if(hour !== 12) {
            hour = hour + 12;
        }
    } else if(t[1] === "NOON") {
        hour = 12;
    } else if(t[1] === "MIDNIGHT"){
        hour = 24;
    }
    console.log(result = hour.toString() + minute);
}

// toMilitaryTime("6:00 AM");


//create character map

function turnOb(str) {
    let obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    console.log(obj);
}

// turnOb("hellothere");

//turn an array into object

function turnToObj(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    console.log(obj);
}

// turnToObj(["a", "b", "c"]);

array = [3, 5, 6, 8, 5, 3]

// function firstDup(arr) {
// 	//turn into an object
// 	let obj = {};
//   for(let char of arr) {
//   	obj[char] = obj[char] + 1 || 1;
//     if(obj[char] > 1) {
//         console.log(obj);
//     }
//   }
// }

function firstDup(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i != arr.indexOf(arr[i])) {
            console.log(arr[i]);
        }
    }
}

console.log(firstDup([3, 5, 6, 8, 5, 3]));