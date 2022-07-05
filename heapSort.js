
// heapSort.js

var arr = [45, 34, 87, 26];
var size = arr.length; 

function heapify(array, n) {
    var par, node;
 
    for(var i=1; i<= n; i++) {
       node = i; 
       par = node/2;

       while(par >=1) {
          if(array[par] < array[node]){
            var temp = array[par];
            array[par] = array[node];
            array[node] = temp;
          }
        node = par;
        par = node/2;
       }
    }
 }

 
 function heapSort(array, n) {
    for(var i = n-1; i>= 1; i--) {
       heapify(array, i); //heapify each time
       var temp = array[0];
       array[0] = array[i];
       array[i] = temp; //swap last element with first
    }
    console.log(array)
 }

 heapSort(arr, size);