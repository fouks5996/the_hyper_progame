export const concatArray = (array, array1, array2, num) => {
	array = array1.concat(array2);
	array.splice(num);
	return array;
};
