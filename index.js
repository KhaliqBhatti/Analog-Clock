var pinSec = document.getElementById('pinsec')
var pinMin = document.getElementById('minute')
var pinHrs = document.getElementById('hours')
setInterval(() => {
    var date = new Date()
    var sec = date.getSeconds()
    var min = date.getMinutes()
    var hrs = date.getHours()
    var move = sec * 6 + 90
    var moveMin = min * 6 + 90
    var moveHrs = hrs * 30 + min / 2 + 90
    pinSec.style.transform = `rotate(${move}deg)`;
    pinMin.style.transform = `rotate(${moveMin}deg)`
    pinHrs.style.transform = `rotate(${moveHrs}deg)`


}, 1000)