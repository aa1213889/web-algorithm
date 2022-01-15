/** 使用Set */
function arrUnique(arr) {
    return [...new Set(arr)]
}

arrUnique([1, 2, 2, 3]) // [1,2,3]

/** 对象容器 */
function arrUnique(arr) {
    const newArr = []
    const obj = {}
    arr.map((item) => {
        if (!obj.hasOwnProperty(item)) {
            obj[item] = 1
            newArr.push(item)
        }
    })
    return newArr
}
arrUnique([1, 2, 2, 3, 4])