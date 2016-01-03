function checkeredBoard(dimension) {
  if (dimension < 2) {
    return false
  }
  if (dimension % 1 !== 0){
    return false
  }
  
	var n = dimension
  var matrix = []
  var finalStr = ''

 	for(var x=0;x<n;x++){
  	var rows = []
    for(y=0;y<n;y++) {
    	if(n%2===0){
        if((y%2===0 && x%2===0) || (y%2===1 && x%2===1)){
          rows.push('\u25A1')
        }
        else{
          rows.push('\u25A0')
        }
      }
      else if (n%2===1){
      	 if((y%2===0 && x%2===0) || (y%2===1 && x%2===1)){
          rows.push('\u25A0')
        }
        else{
          rows.push('\u25A1')
        }
      }
     } 
    matrix.push(rows)
  }
 
  for(var i=0;i<matrix.length;i++){
    if(i !== matrix.length-1) {
    finalStr += (matrix[i].join(' ') + '\n')
    }
    else {finalStr += (matrix[i].join(' '))}
  }
  
  return finalStr
}
