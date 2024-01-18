let RealTime = document.querySelector(".time");

let sec = 0;
let min = 0;
let hour = 0;
let Timer = true;

function startTime(){
    if(Timer == true){
        Timer = false;
        timerCycle();
    }
}

function stopTimer(){
    if (Timer == false) {
        Timer = true;
    }
}

function resetTimer(){
    RealTime.innerHTML = "00:00:00";
    Timer = true;
    hr = 0;
    sec = 0;
    min = 0;
  }

function timerCycle(){
    if(Timer == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        sec = sec + 1;

        if(sec === 60){
            min = min + 1;
            sec = 0;
        }
        if(min === 60){
            hour = hour + 1;
            min = 0;
            sec = 0;
        }

        if(sec < 10){
            sec  = "0" + sec;
        }
        if(min < 10){
            min  = "0" + min;
        }
        if(hour < 10){
            hour  = "0" + hour;
        }

        RealTime.innerHTML =  hour + ":" + min + ":" + sec;
        setTimeout("timerCycle()", 1000);
    }
}