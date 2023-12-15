// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

let uppendData = "Tum don ke peche, don tumhare peche, too much fun";

console.log("Asunc function start");
fs.writeFile("a.txt",uppendData,function(err,data){
    console.log("Uppended");
    console.log(fs.readFileSync("a.txt","utf-8"));
    console.log("Async function end");
});

console.log("Done !!");
