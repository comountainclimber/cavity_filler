// Problem 3:

/*

Step 1. Write code to generate a random integer n, where 2 <= n <= 10

Step 2. Print n.

Step 3. Initialize an array of length n with each value equal to its index. For example, if n = 5 then [ 0, 1, 2, 3, 4 ] would be the array.

Step 4. Print the array.

Step 5. Shuffle the array using any method.

Step 6. Print the shuffled array.

Step 7. Randomly select one element of the shuffled array then append it to the array. This new array will now have a duplicate. This array should have length n+1 and contain numbers in the range 0 to n-1 inclusive.

Step 8. Print this array.

Step 9. Shuffle the new array and print it.

Step 10. Find the duplicate of the array from step 9 using no other information from the other steps.

Step 11. Print the duplicate.

Bonus:

Step 12. What is the time and space complexity of your algorithm to find the duplicate?

Step 13. Can you do it in time O(N log N)?

Step 14. Can you do it in time O(N)?

Step 15. Can you do it in time O(N) and space O(1)?

*/

var n = Math.floor((Math.random() * 9) + 2);

console.log(n)

var arrMaker = function(n) {
  var arr = []
  for(var i=0;i<=n;i++){
    arr.push(i)
  }
  return arr
}

console.log(arrMaker(n))
var myArray = arrMaker(n)

//utilizing a premade array shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var shuffledArray = shuffle(myArray)
console.log(shuffledArray)

var randomDuplicateFromArray = function(array) {
  array.push(array[Math.floor(Math.random()*array.length)])
  return array
}

var x =randomDuplicateFromArray(shuffledArray)
console.log(x)

console.log(shuffle(x))

// var shuffledArrayWDup = randomDuplicateFromArray(shuffledArray)
// console.log(shuffle(randomDuplicateFromArray(shuffledArray)))
// console.log(shuffle(shuffledArrayWDup))

