
// mergeSort.js

var arr = [45, 34, 87, 26, 76, 18, 57, 65];

var firstHalf = Math.floor(arr.length / 2);
var secondHalf = arr.length - firstHalf;

for(var i=0; i<firstHalf.length-1; i++){
    console.log(arr[i]);
}
console.log(arr);