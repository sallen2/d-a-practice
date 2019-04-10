
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
console.log(result);