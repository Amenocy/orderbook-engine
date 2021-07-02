/**
 * Created by landoyjx on 2017/2/8.
 */
const { uniqueId } = require("lodash");
 
var MultiMap = require("../lib/multimap");
var prettyHrtime = require('pretty-hrtime');
 
 
var start = process.hrtime();




var map = new MultiMap(true);
for (let index = 0; index < 500000; index++) {
    map.insert(index, index+"1");
}
var end = process.hrtime(start);
console.log(prettyHrtime(end));
console.log("inserted");

var start = process.hrtime();
var map = new MultiMap(true);
for (let index = 0; index < 500000; index++) {
    map.insert(index, index+"2");
}
var end = process.hrtime(start);
console.log(prettyHrtime(end));
//map.print();
console.log("---");

var it = map.find(12);
map.erase(it);
//map.print();

console.log("---");
var it = map.find(10);
map.erase(it);
//map.print();



