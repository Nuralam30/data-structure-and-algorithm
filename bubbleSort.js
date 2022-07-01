
// bubbleSort.js
// biggest element reach at the end first

var arr = [45, 34, 87, 26, 76, 18, 57];

for(let i=0; i<arr.length-1; i++){
    for(let j=1; j<arr.length; j++){
        if(arr[j] < arr[j-1]){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
console.log(arr)