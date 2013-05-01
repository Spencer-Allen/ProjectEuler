/*
The problem:
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

// this is a function that takes a string and reverses it. 
function reverse(s) {
    return s.split("").reverse().join("");
}
//this is a variable for the end answer. I couldn't figure out a way for it to not change with each loop, so I placed it outside of the function to initialize
var answer = 0;

/*
This is the function that finds the highest palindromic product of whatever number is entered. 
It starts by setting i as a static reference to the argument. 
I created a for loop that starts with the first factor (X), and decrements until it reaches 90% of the original factor. 
I then created a nested for loop that takes Y as the second factor, and decrements in the exact same way as with X. 

In the nested for loop, I take the product of X and Y, (Z) and turn it into a string. 
I then test it to see if it's palindromic. 
If it comes back palindromic, AND greater than the variable answer, then Z becomes answer

*/
function testForPalindrome(x) {
    for (i = x; x > i * .9; x--) {
             
        for (y = i; y > i * .9; y--){
            var z = x * y;
            var sumString = z.toString();
                if (reverse(sumString) == sumString && z > answer) {
              answer = z;
                }    
          }
    }
    			console.log (answer);
}

testForPalindrome(999);
