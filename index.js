
// frequency
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }
    for (let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const result = validAnagram('asgh', 'ghas');
console.log(result) //true

// two pointers
function countUniqueValues(arr) {
    let j = 0;
    let k = 1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[j] === arr[k]){
            k++
        }else{
            j++
            arr[j] = arr[k]
            k++
        }
    }
    return `${j} unique values`
}

const uniqueVals = countUniqueValues([1, 1, 1, 2, 3, 3, 4, 5,7,8,9,12,13])
console.log(uniqueVals) //10 unique values