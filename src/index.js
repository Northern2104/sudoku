module.exports = function solveSudoku(matrix) {
	let sudoku = matrix.map (function callback (arr) {
		let testArr = [1,2,3,4,5,6,7,8,9];
		shuffle (testArr);

		for (i=0;i<=arr.length;i++){
			if(arr[i]>0){
				let index = testArr.indexOf(arr[i]);
				testArr.splice(index,1);
			};
		};
		for (i=0;i<=arr.length;i++){
			if(arr[i]==false){
				arr[i] = testArr[0];
				testArr.splice(0,1);
			};
		};
		return arr;
		});
	return sudoku;
};

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
};
