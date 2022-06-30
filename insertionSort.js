
// insertionSort.js

var arr = [45, 34, 87, 26, 76, 18, 57];

for (let i=1; i<arr.length; i++){
    for (j=i; j>0; j--){
        if(arr[j] < arr[j-1]){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
console.log(arr)