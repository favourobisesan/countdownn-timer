var countDownDate = new Date ("March 8, 2024 00:00:00").getTime()

function updateCountdown(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(distance % ((1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + "days";
document.getElementById("hours").innerHTML = hours + "hours";
document.getElementById("minutes").innerHTML = minutes + "minutes";
document.getElementById("seconds").innerHTML = seconds + "seconds";


if (distance<0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
}

}
var x = setInterval(updateCountdown,1000);
    
