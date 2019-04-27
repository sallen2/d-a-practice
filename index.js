
// // frequency
// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const obj1 = {};
//     const obj2 = {};
//     for (let char of str1) {
//         obj1[char] = (obj1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         obj2[char] = (obj2[char] || 0) + 1;
//     }
//     for (let key in obj1) {
//         if (!(key in obj2)) {
//             return false;
//         }
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// const result = validAnagram('asgh', 'ghas');
// console.log(result) //true

// // two pointers
// function countUniqueValues(arr) {
//     let j = 0;
//     let k = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[j] === arr[k]) {
//             k++
//         } else {
//             j++
//             arr[j] = arr[k]
//             k++
//         }
//     }
//     return `${j} unique values`
// }

// const uniqueVals = countUniqueValues([1, 1, 1, 2, 3, 3, 4, 5, 7, 8, 9, 12, 13])
// console.log(uniqueVals) //10 unique values

// 1) practice problem 1

// function sameFrequency(num1, num2) {
//     const obj1 = {}
//     const obj2 = {}
//     // first argument converted to string
//     num1 = num1.toString()
//     // second argument converted to string
//     num2 = num2.toString()
//     if (arguments.length === 0) return false;
//     else if(num1.length !== num2.length) return false;
//     for (let digit of num1) {
//         obj1[digit] = (obj1[digit] || 0) + 1
//     }
//     for (let digit of num2) {
//         obj2[digit] = (obj2[digit] || 0) + 1
//     }
//     for (let key in obj1){
//         if(!(key in obj2)) return false;
//         else if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
// }

// console.log(sameFrequency(544, 345))

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length
//     // const obj = {}
//     // for (let arg of args){
//     //     obj[arg] = (obj[arg] || 0) +1
//     // }
//     // for(let key in obj){
//     //     if(obj[key] > 1){
//     //         return true
//     //     }
//     // }
//     // return false;
// }

// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// function averagePair(arr, avg) {
//     let start = 0
//     let end = arr.length - 1
//     if (arr.length === 0) return false
//     while (start < end) {
//         let average = (arr[start] + arr[end]) / 2
//         if (average === avg) return true
//         else if (average < avg) start++
//         else end--
//     }
//     return false
// }

// console.log(averagePair([1, 2, 3], 2.5))
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
// console.log(averagePair([], 4))

// function isSubsequence(str1, str2) {
//     let str1Index = 0
//     let str2Index = 0
//     let sameCharCount = 0

//     while (str2Index < str2.length) {
//         if (str1[str1Index] === str2[str2Index]) {
//             str1Index++
//             str2Index++
//             sameCharCount++
//             if (sameCharCount === str1.length) return true
//         } else if (str1[str1Index] !== str2[str2Index]) {
//             str2Index++
//         }
//     }
//     return false
// }

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))

// function maxSubarraySum(arr, subLength) {
//     let temp = -Infinity
//     let value = 0
//     if (arr.length < subLength) return null
//     for (let i = 0; i < subLength; i++) {
//         value += arr[i]
//     }
//     temp = value
//     for (let i = subLength; i < arr.length; i++) {
//         value = value - arr[i - subLength] + arr[i]
//         if (temp < value) {
//             temp = value
//         }
//     }
//     return temp
// }

// //   call function and log to console
// console.log(maxSubarraySum([100, 200, 300, 400], 2))
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
// console.log(maxSubarraySum([2, 3], 3))

function minSubArrayLen(arr, value) {
    let length = 0
    let sum = 0
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        length++
        if(sum >= value && length <= temp){
            length++
            return length
        }else{
            

        }
    }
    // return length
    // check if index is greater than or equal to value 
    // if index is greater than or equal to value add 1 to length variable
    // if not keep stepping through array
    // add one to length 
    // if sum greater than or equal to value check if length less than temp length
}

console.log(minSubArrayLen([3],1))