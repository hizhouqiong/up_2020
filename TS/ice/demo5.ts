/*
 * @Descripttion: 
 * @version: 
 * @Author: terry
 * @Date: 2020-09-28 08:52:00
 * @LastEditors: terry
 * @LastEditTime: 2020-09-28 09:04:37
 */
function getTotal(one: number, two: number): number {
    return one + two
}
const total = getTotal(1, 2)

// 函数无返回值，void
function say(): void{
    console.log('hello ts')
}
// 函数永远执行不到，死循环等， 返回never 
function errorFunction(): never{
    throw new Error()
    console.log('hello world')
}

function forNever(): never {
    while (true) {
        console.log('hello world')
    }
}
// 参数为对象的注解
function add({one, two}: {one: number, two:number}) {
    return one + two
}
const rst = add({one: 1, two: 2})

function getNumber({one}: {one: number}) {
    return one
}

const one = getNumber({one: 1})