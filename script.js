const worldCupDate = new Date("10 June 2026 23:00");


function countdown() {
    let currentDate = new Date();
    let timeLeft = worldCupDate - currentDate;
    if (timeLeft > 0) {
        let seconds = Math.floor(timeLeft / 1000) % 60;
        let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24) % 30;
        let months = Math.floor(timeLeft / 1000 / 60 / 60 / 24 / 30) % 12;
        let years = Math.floor((timeLeft / 1000 / 60 / 60 / 24 / 30 / 12))


        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("days").innerHTML = days;
        document.getElementById("months").innerHTML = months;
        document.getElementById("years").innerHTML = years;
    } else{
        document.getElementById("countdown-container").innerHTML = `<p class="final-text"> THE TIME HAS COME </p>`
    }
}

setTimeout(countdown, 10)
setInterval(countdown, 1000)
