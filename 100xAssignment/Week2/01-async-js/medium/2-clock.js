// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime(){
    const curTime = new Date();
    const hr = curTime.getHours();
    const mi = curTime.getMinutes();
    const sec = curTime.getSeconds();
    
    console.log(`${hr} : ${mi} : ${sec}`);
}

function showTimeAmPm(){

    const curTime = new Date();
    let hr = curTime.getHours();
    const mi = curTime.getMinutes();
    const sec = curTime.getSeconds();
    const AmPm = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12;
    console.log(`${hr} : ${mi} : ${sec} ${AmPm}`);

}


setInterval(function(){
    console.clear();

    showTime();

    showTimeAmPm();
}, 1000);