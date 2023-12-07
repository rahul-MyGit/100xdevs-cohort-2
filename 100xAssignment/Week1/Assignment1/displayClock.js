function clock(){
    const curTime = new Date();
    const hour = curTime.getHours();
    const min = curTime.getMinutes();
    const sec = curTime.getSeconds();

    console.log(hour + " : " + min + " : "+ sec);

}


const interval = setInterval(clock,1000);