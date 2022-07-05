
// heapSort.js

var arr = [45, 34, 87, 26, 76, 18, 57, 65, 95];
var len; 

function heapify(array, i) {
   var maxIndex = i;
   var leftIndex = i*2 + 1;
   var rigthIndex = i*2 + 2;

   if(leftIndex < len && array[leftIndex] > array[maxIndex]){
      maxIndex = leftIndex;
   }

   if(rigthIndex < len && array[rigthIndex] > array[maxIndex]){
      maxIndex = rigthIndex;
   }

   if(maxIndex !== i){
      swap(array, i, maxIndex);
      heapify(array, maxIndex);
   }
 }


 function swap(arr, index_1, index_2){
   var temp = arr[index_1];
   arr[index_1] = arr[index_2];
   arr[index_2] = temp;
 }

 
 function heapsort(array) {
   len = array.length;
   var heapIndex = Math.floor(len / 2);

   for(var i = heapIndex; i>= 0; i--) {
      heapify(array, i); //heapify each time
   }

   for (i = array.length-1; i>0; i--) {
     swap(array, 0, i);
     len--;
   
     heapify(array, 0);
   }
   console.log(array);
 }

heapsort(arr);
