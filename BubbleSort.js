var a = [1,9,4,2,2,4,-1,2];
var sortedArrays = [];

var numberTraversal = a.length - 1;

while( numberTraversal > 0 ){
	
  for(var i = 0; i < numberTraversal; i++){
  
  	if( a[i] > a[i+1] ){
    	var tempValue = a[i];
      a[i]  = a[i+1];
      a[i+1] = tempValue;
      console.log(a); 
      //console will print every time a change is made
    }
  }
  
  numberTraversal--;
}
