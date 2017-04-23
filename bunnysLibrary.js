// swap - two values in an array switch places
function swap(array, index1, index2) {
	var temp = array[index1];
	array[index1] = array[index2]
	array[index2] = temp
	return array
}

// var myArray = [69, 100, 57, 'Bunny'];

// console.log(myArray)
// console.log(swap(myArray, 1, 3))

// Merge Sort - Array1 is empty array, Array2 is array to be merge sorted
function mergeSort(array) {
	if(array.length <= 1) {
		return array
	}

	var middleItem = Math.floor(array.length / 2),
		arrayLeft = array.slice(0, middleItem),
		arrayRight = array.slice(middleItem)

	return merge(mergeSort(arrayLeft), mergeSort(arrayRight))

}

function merge(arrayLeft, arrayRight) {
	var finalArray = []

	while(arrayLeft.length && arrayRight.length) {
		if(arrayLeft[0] <= arrayRight[0]) {
			finalArray.push(arrayLeft.shift())
		}
		else {
			finalArray.push(arrayRight.shift())
		}
	}

	while(arrayLeft.length) {
		finalArray.push(arrayLeft.shift())
	}
	while(arrayRight.length) {
		finalArray.push(arrayRight.shift())
	}

	return finalArray
}

// var numberArray = [4, 69, 57, 100, 3, 99]
// var stringArray = ['Billy', 'Bunny', 'BigBill', 'Erin', 'Jeff']

// console.log(numberArray)
// console.log(mergeSort(numberArray))
// console.log(stringArray)
// console.log(mergeSort(stringArray))

// Counts total number of vowels with unknown number of arrays - uses recursion
function countVowels(array) {
    var vowels = 0
    if(Array.isArray(array)) { // tests to see if array is an an actual array
        for(var i = 0; i < array.length; i++) { // if so than loops through the array
            vowels = vowels + countVowels(array[i]) // run function recursively and add to total number of vowels
        }
    }
    else {
        var word = array.toLowerCase(); // convert to lowercase 
        for(var j = 0; j < word.length; j++) { // run through letters in the word
            if(word[j] === 'a' || word[j] === 'e' || word[j] === 'i' || word[j] === 'o' || word[j] === 'u') { // if it's a vowel
                vowels++; // add to total # of vowels
            }
        }
    }
    return vowels; // return total
}

// var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

countVowels(nestedArr)