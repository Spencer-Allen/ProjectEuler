/*

Problem: By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. 
What is the 10,001st prime number?

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
    for (var x = 5; input > primes.length; x++) {
        if (primeTest(primes, x) === true) {
            primes.push(x);
        }
    }
    console.log(primes);
}

findPrimes(10001);
