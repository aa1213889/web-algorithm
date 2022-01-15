//调用sameNumbers([1,2,3],[2,3,4])
//得到 [2,3]

function sameNumbers(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item))
}

console.log(sameNumbers([1, 2, 3], [2, 3, 4])) //[2,3]