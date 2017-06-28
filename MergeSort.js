//File to run and implement merge sort
//probably want to use some form of recursion since i want to get individual parts.
//the difficult part:  how to string them back together again (need to think about this)

function mergeSort(array){

  if(array.length===1){
    return array[0];
  }else{
    var value = mergeSort(array.slice(0,array.length / 2)+mergeSort(array.slice(array.length / 2));
    //still unsure how to work the code above                      
  }
  
  
}
