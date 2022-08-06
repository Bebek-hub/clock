const presentTime = document.querySelector(".time")
const presentDate = document.querySelector('.date')

function digitalClock() {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let day = clock.getDay();
    let date = clock.getDate();
    let month = clock.getMonth();
    let year = clock.getFullYear();
    let period = "AM";

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour -= 12;
        period = "PM";
    }

    hour = (hour < 10? "0" + hour : hour);
    minute = (minute < 10?  "0" + minute : minute);
    second = (second < 10?  "0" + second : second);

    let currentTime = hour + ":" + minute + ":" + second + " " + period;
    presentTime.textContent = currentTime;

    // Date format

    if (parseInt(day) === 0) {
        day = "Sunday"
    } else if (parseInt(day) === 1) {
        day = "Monday"
    } else if (parseInt(day) === 2) {
        day = "Tuesday"
    } else if (parseInt(day) === 3) {
        day = "Wednesday"
    } else if (parseInt(day) === 4) {
        day = "Thursday"
    } else if (parseInt(day) === 5) {
        day = "Friday"
    } else if (parseInt(day) === 6) {
        day = "Saturday"
    }

    if (parseInt(date) === 1) {
        date += "st"
    } else if (parseInt(date) === 2) {
        date += "nd"
    } else if (parseInt(date) === 3) {
        date += "rd"
    } else if (parseInt(date) === 21) {
        date += "st"
    } else if (parseInt(date) === 22) {
        date += "nd"
    } else if (parseInt(date) === 23) {
        date += "rd"
    } else if (parseInt(date) === 31) {
        date += "st"
    } else {date += "th"}

    if (parseInt(month) === 0) {
        month = "January"
    } else if (parseInt(month) === 1) {
        month = "February"
    } else if (parseInt(month) === 2) {
        month = "March"
    } else if (parseInt(month) === 3) {
        month = "April"
    } else if (parseInt(month) === 4) {
        month = "May"
    } else if (parseInt(month) === 5) {
        month = "June"
    } else if (parseInt(month) === 6) {
        month = "July"
    } else if (parseInt(month) === 7) {
        month = "August"
    } else if (parseInt(month) === 8) {
        month = "September"
    } else if (parseInt(month) === 9) {
        month = "October"
    } else if (parseInt(month) === 10) {
        month = "November"
    } else if (parseInt(month) === 11) {
        month = "December"
    } 


    let currentDate = day + " " + date + "," + " " + month + " " + year
    presentDate.textContent = currentDate;

    setTimeout(digitalClock, 1000);
}
digitalClock();



// Analog clock functionalities

const getHour = document.querySelector('.hour')
const getMinute = document.querySelector('.minute')
const getSecond = document.querySelector('.second')

function analogClock() {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    const secdeg = ((360 * sec)/ 60);
    getSecond.style.transform = `rotate(${secdeg}deg)`;

    const mindeg = ((360 * min)/ 60) + ((6 * min)/ 60);
    getMinute.style.transform = `rotate(${mindeg}deg)`;

    const hrdeg = ((360 * hr)/ 12) + ((30 * hr)/ 60);
    getHour.style.transform = `rotate(${hrdeg}deg)`;


    setTimeout(analogClock, 1000);
}
analogClock()