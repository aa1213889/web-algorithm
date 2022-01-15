function statisticalChar(str) {
    const strArr = [...str]
    const obj = {}
    strArr.map(item => obj.hasOwnProperty(item) ? obj[item]++ : obj[item] = 1)
    return obj
}

console.log(statisticalChar('hello,world'))