/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

var bignum = require('bignum');

var makeBignum = function(base, exp){
	var b = bignum.pow(base,exp).toString();
	var numArray = b.split("");
	var finalNum = 0
	for (x in numArray){
		finalNum += +numArray[x];
		console.log(finalNum);
	}
}

makeBignum(2,1000);

