
// quickSort.js

var arr = [45, 34, 87, 26, 76, 18, 57, 65, 95];

// console.log(arr.sort())

function swap(arr, leftIndex, rightIndex){
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

// 45, 34, 87, 26, 76, 18, 57, 65, 95
// 45, 34, 65, 26, 76, 18, 57, 87, 95
// 45, 34, 65, 26, 57, 18, 76, 87, 95
// 45, 34, 18, 26, 57, 65, 76, 87, 95
// 18, 34, 45, 26, 57, 65, 76, 87, 95
// 18, 34, 26, 45, 57, 65, 76, 87, 95
// 18, 26, 34, 45, 57, 65, 76, 87, 95
// 18, 26, 34, 45, 57, 65, 76, 87, 95


function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); //index returned from partition
        
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(arr, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(arr, index, right);
        }
    }
    return arr;
}

// first call to quick sort
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); 
//prints [18, 26, 34, 45, 57, 65, 76, 87, 95]