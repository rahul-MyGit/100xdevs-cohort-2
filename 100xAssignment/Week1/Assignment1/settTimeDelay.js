const start = Date.now();
setTimeout(() => {
    const end = Date.now();
    const timeTaken = (end - start)/1000;
    console.log('Ttme taken is: ' + timeTaken);
}, 1000);