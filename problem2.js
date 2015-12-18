/*
Step 1. Write code to pick a random integer, n, where 2 <= n <= 8.

Step 2. Print integer n.

Step 3. Generate a square map/matrix of random single digits (1-9) of size nxn, then print to stdout. For example if, n = 4, one version could be:

1112
1912
1892
1234

Step 4. Print the map.

Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side (edge). Only consider that cells are adjacent if they are immediately above, below, or to either side. Dialog cells are not considered adjacent.

You need to find all the cavities on the map and depict them with the uppercase character X. For the example above, the correct output would be:

1112
1X12
18X2
1234

Step 5. Print the map to the console showing the cavities with 'X'.

When the program is finished it should performed all the steps above.

*/

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
