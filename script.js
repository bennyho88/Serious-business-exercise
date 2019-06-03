var today = new Date();
var day = today.getDay();
console.log(day);
var hour = today.getHours();
console.log(hour);
var minutes = today.getMinutes() / 100;
console.log(minutes);
var time = hour + minutes;
console.log(time);

var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

let n = weekdays[day];
console.log(n);

window.addEventListener ("load", door) 

function door() {

if ( (day = 0) || (day = 1) || (time < 9) || (time > 13)) {
    document.querySelector("#store").innerHTML = "closed";
} else {
    document.querySelector("#store").innerHTML = "open";
    }
}

document.querySelector("#now").innerHTML = "It's " +  n + " " + time +" hour" + " now";
