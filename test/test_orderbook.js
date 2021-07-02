/**
 * Created by landoyjx on 2017/2/8.
 */
var OrderBook = require('../lib/orderbook');
var OrderCondition = require('../lib/types').OrderCondition;
var Order = require('../lib/order');
var OrderEvent = require('../lib/types').OrderEvent;





var book = new OrderBook();
book.on(OrderEvent.accept, (e) => {
    console.log(e)
});

 

for (var i = 1; i < 5000; ++i) {
   var order = new Order(true, i, 10);
   book.add(order, OrderCondition.oc_no_conditions);
   console.log("buy added at,", i)
}
for (var i = 5500; i < 10000; ++i) {
    var order = new Order(false, i, 10);
    book.add(order, OrderCondition.oc_no_conditions);
    console.log("sell added at,", i)
}/*
*/
console.log(book.bids());
console.log('-');
console.log(book.asks());
return

var order1 = new Order(true, 2.5, 10);
book.add(order1, OrderCondition.oc_no_conditions, function (err, data) {
    console.log(err, data);
});
console.log(book.bids());
console.log('-');
console.log(book.asks());

var order2 = new Order(true, 1.00, 10);
book.add(order2, OrderCondition.oc_no_conditions, function (err, data) {
    console.log(err, data);
});

console.log('\n\n');
console.log(book.bids());
console.log('-');
console.log(book.asks());
