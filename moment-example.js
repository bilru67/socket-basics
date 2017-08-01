var moment = require('moment');
var now = moment();

/*console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//now.subtract(1, 'year');

//console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//console.log(now.format('h:mm A'));

//Oct 5th 2015, 6:15 pm

console.log(now.format('MMM Do YYYY, h:mm A'));*/
console.log(now.valueOf());
var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('MMM Do YYYY, h:mm A'));