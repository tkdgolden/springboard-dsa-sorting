function merge(array1, array2) {
    let i = 0;
    let j = 0;
    const newArray = [];
    while (i < array1.length || j < array2.length) {
        if (i >= array1.length) {
            newArray.push(array2.slice(j));
            return newArray.flat();
        }
        if (j >= array2.length) {
            newArray.push(array1.slice(i));
            return newArray.flat();
        }
        if (array1[i] < array2[j]) {
            newArray.push(array1[i]);
            i++;
        }
        else {
            newArray.push(array2[j]);
            j++;
        }
    }
    return newArray;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};