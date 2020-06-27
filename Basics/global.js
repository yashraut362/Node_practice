//console.log(global);

global.setTimeout(() => {
    console.log('stop')
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("ohh yeah");
}, 1000) 

console.log(__dirname);
console.log(__filename);
