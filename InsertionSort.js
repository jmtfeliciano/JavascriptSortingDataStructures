//Basic JS code to implement and demonstrate insertion sort
//NOTE:  Arrayy[k] should not be modified as it compares value.  
// Need to identify which index to be inserted THEN MODIFY

//TO DO LIST:  need to fix bug for array.length>3, because when array[0]>array[1], the entire sorting gets messed up.  so need to work on this


var arrayy = [1,9,2,3];
console.log("Original array is: "+arrayy); // will log original array

var noIterations = arrayy.length - 1;
var currentIndex = 1;

while(noIterations>0){
	
	var whereToInsert = currentIndex;	
   
	for(var i=currentIndex; i > 0; i--){
      
		if(arrayy[i-1] <= arrayy[currentIndex]){
      
			if(whereToInsert !== currentIndex && i === 1 ){
				arrayy.splice(whereToInsert,0,arrayy[currentIndex]);
        	 	arrayy.splice(currentIndex+1,1);
         		console.log(arrayy);
			}
			
		}else{
      		whereToInsert = i-1;
      	}
	}	
	currentIndex++;
	noIterations--;
}



if (arrayy.length == 1){
	console.log(arrayy);
}else if(arrayy.length == 2){
	if(arrayy[0] > arrayy[1]){
  	var temp = arrayy[0];
    arrayy[0] = arrayy[1];
    arrayy[1] = temp;
    console.log(arrayy);
  }else{
  	console.log(arrayy);
  }
} 
