// Write a recursive function that takes one parameter: n and counts down from n.


function countDown(n: number) {
	if (n < 1){
		return 0
	} 
	else {
		return countDown(n - 1);
	}
}

console.log(countDown(5));