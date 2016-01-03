/*Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

The input is expected to be a whole number that's at least two, and returns false otherwise (Nothing in Haskell).

Examples:

checkeredBoard(5)
returns the string

■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■

*/

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

