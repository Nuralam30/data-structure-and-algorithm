
// selectionSort.js

var arr = [45, 34, 87, 26, 76, 18, 57];

for (let i=0; i<arr.length-1; i++){
    var k = i;
    for (j=i+1; j<arr.length; j++){
        if(arr[j] < arr[k]){
            k = j;
            var temp = arr[j];
            arr[j] = arr[k];
            arr[k] = temp;
        }
    }
}
console.log(arr)