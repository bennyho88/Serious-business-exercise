var today = new Date();
var day = today.getDay();
console.log(day);
var hour = today.getHours();
console.log(hour);
var minutes = today.getMinutes() / 100;
console.log(minutes);
var seconds = today.getSeconds();
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

var minutes = today.getMinutes();
if ( (day = 0) || (day = 1) || (time < 9) || (time > 13)) {
    document.querySelector("#store").innerHTML = "closed";
} else {
    document.querySelector("#store").innerHTML = "open";
    }
}

document.querySelector("#now").innerHTML = "It's " +  n + " " + time +" hour" + " now";

// function startTime() {
   
//    var m = today.getMinutes();
   
// /*
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
// */
//     m = checkTime(m);
//     seconds= checkTime(seconds);
//     document.getElementById("txt").innerHTML =
//     hour + ":" + m + ":" + seconds;
//     var t = setTimeout (startTime, 500);
// }

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};
//     return i;
// };

setInterval (startTimer, 1000);

function startTimer() {
    document.getElementById("txt").innerHTML = new Date().toLocaleTimeString();
}