
let secondsHand = document.getElementsByClassName("seconds")[0];
let minutesHand = document.getElementsByClassName("minutes")[0];
let hoursHand = document.getElementsByClassName("hours")[0];

function updateHands(){
    let time = new Date();

    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    let secondsDegree = seconds*6;
    let minutesDegree = minutes*6 + seconds/60;
    let hoursDegree = hours*30 + minutes/60;

    secondsHand.style.transform = `rotate(${secondsDegree+90}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree+90}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree+90}deg)`;
    console.log(seconds);
    console.log(minutes);
    console.log(hours)

}

setInterval(updateHands, 1000);
