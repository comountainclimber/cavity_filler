// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"

function accum(s) {
  // your code
  var accumArray = []
  var accumString = ""

  for(var i=0;i<s.length;i++) {
    var placeHolder = []
    placeHolder.push(s[i].toUpperCase())
    
    for(var j=0;j<i;j++) {
      placeHolder.push(s[i].toLowerCase())   
    } 
    accumArray.push(placeHolder)
  }
  
  for(var i=0;i<accumArray.length-1;i++) {
    accumArray[i].push('-')
  }
  
  for(var i=0;i<accumArray.length;i++) { 
    accumString += accumArray[i].join('')
  }
  
return accumString;
}
