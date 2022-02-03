/**
 * 1.暴力递归
 * 时间复杂度: O(2^n)
 */
function fibonacci(num) {
    if (num === 1 || num === 2) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
}

/**
 * 2.迭代法
 * 时间复杂度：O(n)
 * fristNum 前一个数
 * secondNum 前两个数
 * currNum 当前的值
 */
function fibonacci(num) {
    if (num === 1 || num === 2) return 1
    let fristNum = 1
    let secondNum = 1
    let currNum = 0
    for (let i = 3; i <= num; i++) {
        currNum = fristNum + secondNum
        secondNum = fristNum
        fristNum = currNum
    }

    return currNum
}

/**
 * 3.公式法
 * 时间复杂度：O(1)
 * ~~：两次取反去掉小数点
 */
function fibonacci(num) {
    const Sqrt5 = Math.sqrt(5)
    return val = ~~(Math.pow((1 + Sqrt5) / 2, num) - Math.pow((1 - Sqrt5) / 2, num)) / Sqrt5
}