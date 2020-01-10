const osszefesul = require('../src/osszefesul');

function mergesort(arr, start = 0, end = arr.length) {
    let length = end - start;

    if (length < 2) {
        return arr;
    } else {
        let cutoff = Math.ceil(length/2);
        const start1 = start;
        const end1 = start + cutoff;
        const start2 = start + cutoff;
        const end2 = start + length;
        
        mergesort(arr, start1, end1);
        mergesort(arr, start2, end2);

        let arr1 = arr.slice(start1, end1);
        let arr2 = arr.slice(start2, end2);
        
        let newArr = osszefesul(arr1, arr2);
        
        for (let i = 0; i < newArr.length; i++) {
            arr[i+start1] = newArr[i];
        }
    }
    return arr;
}
module.exports = mergesort;
