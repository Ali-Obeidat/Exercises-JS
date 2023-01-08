
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9]


// 1) Write a Javascript program to reverse and array
function reverseArray(Array) {

    let leftIndex = 0;
    let rightIndex = Array.length - 1;

    while (leftIndex < rightIndex) {

        // Swap the elements 
        let temp = Array[leftIndex];
        Array[leftIndex] = Array[rightIndex];
        Array[rightIndex] = temp;


        leftIndex++;
        rightIndex--;

    }
}


reverseArray(arr)
console.log(arr);


// 2) Write a Javascript program to find the duplicate item in a sorted array of integers
function findDuplicates(arr) {

    // A Set is a special type of object that only stores unique values
    let duplicates = new Set();
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === arr[i + 1]) {
            duplicates.add(arr[i]);
        }
    }
    return [...duplicates];
}


let output = findDuplicates(arr)
console.log(output);



// 3 Write a Javascript program to count the occurrences of a value in an array

function countOccurrences(array, value) {
    return array.reduce((count, currentEle) => currentEle === value ? count + 1 : count, 0);
}

console.log(countOccurrences(arr, 3));