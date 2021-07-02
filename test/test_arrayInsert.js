var prettyHrtime = require('pretty-hrtime');
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
} 

 
 
var start = process.hrtime();

let arr = []

for (let index = 0; index < 1000000; index++) {
    
    arr.push(index)
}

for (let index = 0; index < 20000; index++) {
    const randIndex = getRandomInt(1,1000000);
    arr.insert(randIndex,"4")
}
console.log(arr.length)
var end = process.hrtime(start);
console.log(prettyHrtime(end));

var start = process.hrtime();

let arr2 = []

for (let index = 0; index < 1000000; index++) {
    
    arr2.push(index)
}

for (let index = 0; index < 20000; index++) {
    const randIndex = getRandomInt(1,1000000);
    arr2.push(randIndex);
    arr2.sort();
}
console.log(arr.length)
var end = process.hrtime(start);
console.log(prettyHrtime(end));