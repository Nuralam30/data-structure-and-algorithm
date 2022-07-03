
// mergeSort.js

var arr = [45, 34, 87, 26, 76, 18, 57, 65];

if(arr.length == 1){
    return arr;
}


var firstHalf = Math.floor(arr.length / 2);
var firstStart = 0;

var secondHalf = arr.length - firstHalf;
var secondstart = arr.length - firstHalf;


function halfArr(n, len){
    var newArr = [];

    if(len >= n){    
        for (var i=0; i<n; i++){
            for (var j=firstHalf; j<arr.length; j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp; 
                }
            }
        }
            for(var i=firstHalf; i<arr.length; i++){
                newArr.push(arr[i]);
            }
            return newArr;
    }

    else{
        for (var i=0; i<n; i++){
            for (var j=0; j<n-1; j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp; 
                }
            }
        }
        for(var i=0; i<n; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

var firstHalfArr = halfArr(firstHalf, firstStart)
var secondHalfArr = halfArr(secondHalf, secondstart)
console.log(firstHalfArr)
console.log(secondHalfArr)


function mergeSort(arr1,len1, arr2,len2){
    if(len1 == len2){
      var n = firstHalf;
      var totalArr = [];

        for(var i=0; i<n; i++){
            for( var j=i; j<n; j++){
                if(arr1[i] > arr2[j]){
                    totalArr.push(arr2[j]);
                }
                else{
                    totalArr.push(arr1[i])
                }
            }
        }
        console.log(totalArr)
    }
}

const result = mergeSort(firstHalfArr, firstHalf, secondHalfArr, secondHalf);
