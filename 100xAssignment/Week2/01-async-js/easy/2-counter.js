// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let conter = 1;

function increamentingTheCounter(){
    console.log("Counter value is: ", conter);
    conter++;

    if(conter <= 10){
        setTimeout( increamentingTheCounter, 1000);
    }
}

increamentingTheCounter();


































































// (Hint: setTimeout)