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

    setTimeout(digitalClock, 1000);

    // Date format

    if (day === 0) {
        day = "Sunday"
    } else if (day === 1) {
        day = "Monday"
    } else if (day === 2) {
        day = "Tuesday"
    } else if (day === 3) {
        day = "Wednesday"
    } else if (day === 4) {
        day = "Thursday"
    } else if (day === 5) {
        day = "Friday"
    } else if (day === 6) {
        day = "Saturday"
    }

    if (date === 1) {
        date += "st"
    } else if (date === 2) {
        date += "nd"
    } else if (date === 3) {
        date += "rd"
    } else if (date === 21) {
        date += "st"
    } else if (date === 22) {
        date += "nd"
    } else if (date === 23) {
        date += "rd"
    } else if (date === 31) {
        date += "st"
    } else {date += "th"}

    if (month === 0) {
        month = "January"
    } else if (month === 1) {
        month = "February"
    } else if (month === 2) {
        month = "March"
    } else if (month === 3) {
        month = "April"
    } else if (month === 4) {
        month = "May"
    } else if (month === 5) {
        month = "June"
    } else if (month === 6) {
        month = "July"
    } else if (month === 7) {
        month = "August"
    } else if (month === 8) {
        month = "September"
    } else if (month === 9) {
        month = "October"
    } else if (month === 10) {
        month = "November"
    } else if (month === 11) {
        month = "December"
    } 


    let currentDate = day + " " + date + "," + " " + month + " " + year
    presentDate.textContent = currentDate;

}
digitalClock();