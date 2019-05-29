
/*
document.getElementById("btn").addEventListener("click", time);

function time() { 

var today = new Date();
document.getElementById('datetime').innerHTML = today;
*/


/*
document.getElementById("btn").addEventListener("click", time);

function time() {

   
    
    document.getElementById("datetime").innerHTML = n;
    document.getElementById("datetime").innerHTML = h;
    
}
 */

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("weekday").innerHTML = days[d.getDay()];