'use strict';
/** 
Question 4: Algorithm and Problem Solving

Write a function that takes a sorted array of integers and 
a target value as input and finds two numbers within the array 
that sum up to the target value. The function should return the 
indices of the two numbers as an array.

Function Signature:
 */

// For this exercice we are using hash data structure to solve the problem

const arr = [1, 4, 5, 6, 8, 10]
const sum = 5
function findPairsToSum(arr) {
    const result = []
    const hashmap = {}  
    for (let i=0; i< arr.length - 1; i++) {
        if (hashmap[sum - arr[i]]) {
            result.push(hashmap[sum - arr[i]].index)
            result.push(i)
            break
        }
        hashmap[arr[i]] = { index: i }
    }
    return result
}

console.log(findPairsToSum(arr))