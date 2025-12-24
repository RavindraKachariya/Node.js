// console
console.log("Hello Node.js");

// setTimeout
setTimeout(() => {
    console.log("Ravindra");
}, 5000);

// setInterval
let totalSecond = 120;

let timer = setInterval(() => {

    if (totalSecond == 0) {
        return;
    }

    let minutes = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;

    console.log(`${minutes}:${seconds}`);

    totalSecond--;

}, 1000);

// clearTimeout()
setTimeout(() => {
    clearInterval(timer);
    console.log("Timer stopped");
}, 65000);

// __dirname & __filename
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);