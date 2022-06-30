
// bubbleSort.js

var arr = [45, 34, 87, 26, 76];

for(let i=0; i<arr.length; i++){
    for(let j=arr.length -1; j>=i; j--){
        if(arr[j] < arr[j-1]){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
console.log(arr)