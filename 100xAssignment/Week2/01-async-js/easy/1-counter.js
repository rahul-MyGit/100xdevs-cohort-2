// <!-- ## Create a counter in JavaScript -->

// <!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->

let count = 1;

setInterval(function(){
    console.log("Counter Value is : ", count);
    count++;
}, 1000);

// O/P : Counter Value is : 1  
//       Counter Value is : 2 
//       Counter Value is : 3 
//       Counter Value is : 4 
//       Counter Value is : 5
//                  ......... 
