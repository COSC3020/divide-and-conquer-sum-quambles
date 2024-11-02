function divideAndConquerSum(arr) {
    
    if (arr.length === 0) { // Handles error case of empty array
        return 0; 
    }
    if (arr.length === 1) { // Base case - return the single element
        return arr[0];
    }
    
    let subSize = Math.floor(arr.length / 3);
    let sum = 0;

    // Recursive cases handle when subarray size is greater than 1
    // If the size is evenly divisible by 3 no extra work is needed
    // If size % 3 = 1 then the middle subarray gets an extra val to compensate
    // If size % 3 = 2 then the 1st and last subarrays get extra vals to compensate
    if (arr.length % 3 === 0) { // All partitions are equal size
        sum += divideAndConquerSum(arr.slice(0, subSize));
        sum += divideAndConquerSum(arr.slice(subSize, 2 * subSize));
        sum += divideAndConquerSum(arr.slice(2 * subSize));
    } else if (arr.length % 3 === 1) { // Middle subarray is larger
        sum += divideAndConquerSum(arr.slice(0, subSize));
        sum += divideAndConquerSum(arr.slice(subSize, subSize + 1 + subSize));
        sum += divideAndConquerSum(arr.slice(subSize + 1 + subSize));
    } else if (arr.length % 3 === 2) { // First and last subarrays are larger
        sum += divideAndConquerSum(arr.slice(0, subSize + 1));
        sum += divideAndConquerSum(arr.slice(subSize + 1, subSize + 1 + subSize));
        sum += divideAndConquerSum(arr.slice(subSize + 1 + subSize));
    }

    return sum;
}