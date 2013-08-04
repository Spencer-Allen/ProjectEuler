/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function findLongestChain(startNum){

	var highNum =0;
	var currentWinner = 0;
	
	for (var x=startNum; x>startNum*0.75; x--){
		var chainLinks = 0;
		for (var y=x; y>1;){
			if (y%2===0){
			y = y/2;
			chainLinks++;
			}
			else{
			y = y*3+1;
			chainLinks++;
			}
			if (chainLinks>highNum){
				highNum = chainLinks;
				currentWinner = x;
			}		
		}
		console.log(chainLinks);
	}
	console.log(currentWinner);
}

findLongestChain(1000000);
