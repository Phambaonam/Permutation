let arr = [1, 2, 3];
swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
permute = (arr, startIndex, endIndex) => {
    if (startIndex === endIndex) {
        console.log(arr);
        // console.log(arr.join(''));
    } else {
        for (let i = startIndex; i <= endIndex; i++) {
            swap(arr, startIndex, i);
            permute(arr, startIndex + 1, endIndex);
            swap(arr, startIndex, i); // backtrack
        }
    }
}
permute(arr, 0, arr.length - 1);