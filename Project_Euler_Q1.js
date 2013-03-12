/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

// Defining array for storing list of numbers divisible by 3 and 5
var container = [ ];
var sum = 0; 
 
//Filling Array container with multiples of 3 and 5 below 1000
for (i=0; i<1000; i++){
  if (i%3==0||i%5==0){ 
	container.push(i);
	}
}

//adding each number in the array to produce the answer to the problem
for (x=0; x<container.length; x++) {
sum += container[x];
}
console.log(sum);
