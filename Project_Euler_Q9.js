/*
A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var square = function (x){
  return x*x;
};

function pTripFind(finalSum){
	for (a=0; a<finalSum; a++){
		for (b=0; b<finalSum; b++){
			for (c=0; c<finalSum; c++){
				if (square(a) + square(b) === square (c) && a + b + c === finalSum){
				console.log (a,b,c,a*b*c);
				}			
			}	
		}
	}
}

pTripFind(1000);
