/*

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/


/*
set the argument as the limit on the for loop
start with var sum as 0
start with  var x as 1 and square it.
Take the product and add it to sum.
x++ and start the loop over again. 

Print the end product.

*/

function findSumOfSquares(y) {
     var x = 0;
     for (sum = 0; x <= y; x++) {
         var square = x * x;
         sum = square + sum;
     }
     console.log(sum);
}

/*
set the argument as the limit on the for loop
start with var sum as 0
start with  var x as 0 and add it to sum.
x++ and start the loop over again. 

Take the sum and square it. Print the product.

*/

function findSquareOfSums(y) {
     var x = 0;
     for (sum = 0; x <= y; x++) {
         sum = x + sum;
     }
     squareSum = sum * sum;
     console.log(squareSum);
}


findSumOfSquares(100);
findSquareOfSums(100);
