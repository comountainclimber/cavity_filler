//PROBLEM NUMBER 2 CAVITY FILLER //

var n = Math.floor((Math.random() * 9) + 1);

console.log("n = " + n);

var matrixCreator = function(n){
var matrix = []
  for(var i=0;i<n;i++){
    var rows = [];
    for(var j=0;j<n;j++){
      rows.push(Math.floor((Math.random() * 9) + 1));
    }
    matrix.push(rows)
  }
  return matrix
}

var matrixVisual = function(matrix) {
  for(var i =0;i<matrix.length;i++){
    console.log(matrix[i])
  }
}

var Matrix1 = matrixCreator(n)

var cavityFiller = function(matrix) {
  for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix.length;j++){
      var current = matrix[i][j]
      
      if(((current>matrix[i][j+1]) && (current>matrix[i][j-1]))) {
                                        
        if((i>0) && (i<matrix.length-1) && (current>matrix[i][j+1]) && (current>matrix[i][j-1])){
          matrix[i][j] = "x"
        }
       
      }
    }
  }
  return matrix
}

matrixVisual(Matrix1)
console.log('--------------------------------')

var cavityFilledMatrix = cavityFiller(Matrix1)

matrixVisual(cavityFilledMatrix)
