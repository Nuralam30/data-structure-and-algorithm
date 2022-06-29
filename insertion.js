
// insertion.js

var arr = [13, 24];

arr.push(34);
console.log(arr)


// insertion at the begining
arr.unshift(11);
console.log(arr)


// insert into a given index
arr.splice(3,0, 30);
console.log(arr)


// insert into after the given index
var givenIndex = 2;
arr.splice((givenIndex +1),0, 35);
console.log(arr)


// insert into before the given index
var givenIndex = 2;
arr.splice((givenIndex - 1),0, 28);
console.log(arr)

