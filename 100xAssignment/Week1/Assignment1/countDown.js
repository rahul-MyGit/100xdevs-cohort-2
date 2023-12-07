//  QUESTION: TIMER 30 TO 0

//----------------approach 1------------
for ( let i=30; i >=0; i--){
    console.log(i);
}



// ---------------approach 2------------

function count(sec){
    let remain = sec;
    let interval =  setInterval(() => {
        console.log(remain + " Seconds");
        if (remain == 0) {
            console.log("Boom!");
            clearInterval(interval);
        }
        remain--;
    }, 1000);
}

var sec = 10;
count(sec);