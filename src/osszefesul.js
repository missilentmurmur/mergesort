function osszefesul(arr1, arr2) {
    let newArr = [];
    let a = 0;
    let b = 0;

    while ((a < arr1.length) && (b < arr2.length)) {
        if (arr1[a] < arr2[b]) {
            newArr.push(arr1[a]);
            a++;
        } else {
            newArr.push(arr2[b]);
            b++;
        }
    }

    if (a < arr1.length) {
        for (; a < arr1.length; a++) {
            newArr.push(arr1[a]);
        }
    }

    if (b < arr2.length) {
        for (; b < arr2.length;b++) {
            newArr.push(arr2[b]);
        }
    }

    return newArr;
}

module.exports = osszefesul;