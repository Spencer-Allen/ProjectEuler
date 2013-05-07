/*

Problem: By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. 
What is the 10,001st prime number?

*/

/*
I first created a function primeCheck to check two arguments against each other iteratively. 
"Array" is passed into the loop to try "check" against each array value. 
If the test number is divisible by any array value, the function returns false. 
*/

function primeCheck(array,check){
    for (var y=0; y < array.length;y++){
            if (check % array[y] === 0){
            return false;
        }
    }
          return true;    
}

/*

findPrimes is a function to create an array of prime numbers. 
The number of primes to be generated is determined by the argument "input". 
the function starts with array "primes" and runs a for loop that checks primality of "x" against the array using primeCheck.

*/

function findPrimes(input){
  var primes = [2,3,5,7];
		for (var x=11; input>primes.length;x++){
				if (primeCheck(primes,x) === true){
                    primes.push(x); 
				}
		}
	      console.log(primes);
}

findPrimes(10001);
