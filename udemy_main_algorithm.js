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

toMilitaryTime("12:11 AM");