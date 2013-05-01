/* 
The problem:
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Start with a number. (x)
If that number is divisible by the argument, (y), decrement y and repeat the loop. 
If the number fails the divisibility test, set y to the argument, x++, and start the loop again.

once the argument has reached zero, x has passed the divisibility test, and is printed as the answer. 
 
*/

var x = 0;

function problemFive(y){
  for (var i = y; y > 0 ; x++){
		if (x % y === 0){
			y--;
			}
			else 
			{
			y = i; 
		}
	}
    console.log (x);
}

problemFive(20);
