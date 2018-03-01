// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNum(n: number) {
	if (n > 0){
		return n + addNum (n - 1);
	} 
	else {
		return n;
	}
}

console.log(addNum(5));