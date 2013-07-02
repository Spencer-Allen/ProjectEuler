//Borrowed code from problem #7. Needs to be refactored to make it more efficient. Specifically in the primeTest.

/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

*/

function primeTest(array, check) {
    for (var y = 0; y < array.length; y++) {
        if (check % array[y] === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(input) {
    var primes = [2, 3];
    for (var x = 5; x < input; x++) {
        if (primeTest(primes, x) === true) {
            primes.push(x);
        }
    }
    return primes;
}

function findSumOfPrimes(input){
	  primes = findPrimes(input);
	  var total = 0;
	  for (z=0;z<primes.length;z++){
		  total += primes[z];
	  }
	  console.log(total);
}

findSumOfPrimes(2000000);
