/**
 * Created by landoyjx on 2017/2/8.
 */
const { uniqueId } = require("lodash");
 
var MultiMap = require("../lib/multimap");
var prettyHrtime = require('pretty-hrtime');
 
 
var start = process.hrtime();

let step = 5000;
console.log("Allocating for :",step," step order book" );

var map = new MultiMap(true);
for (let index = 0; index < step; index++) {
    map.insert(index, index+"1");
}
var end = process.hrtime(start);
console.log(prettyHrtime(end));
console.log("Allocating finished");

console.log("Inserting ",step, " into order book");
var start = process.hrtime();
for (let index = 0; index < step; index++) {
    map.insert(index, index+"2");
}
var end = process.hrtime(start);
console.log(prettyHrtime(end));

console.log("Inserting finished");
//map.print();
console.log("---");

var it = map.find(12);
map.erase(it);
//map.print();

console.log("---");
var it = map.find(10);
map.erase(it);
//map.print();



