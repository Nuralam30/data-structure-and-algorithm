
// search.js
var arr = [13, 23, 33, 43, 53, 63];
var item = 33;


if(arr.indexOf(item) !== -1){    
    for(let i=0; i<arr.length; i++){
        if(arr[i] == item){
            console.log('Item '+ arr[i] + ' found at position :' + (i+1));
        }
    }
}
else{
    console.log('item not found.')
}