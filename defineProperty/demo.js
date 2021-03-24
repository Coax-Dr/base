// 定义一个新的属性

var obj1 = {}

var newObj = Object.defineProperty(obj1, 'a', {
    value: 1
})


// 参数
// Object.defineProperty(obj, prop, descriptor);
// obj：对象 prop 属性 descriptor: 对象

var obj2 = {}

Object.defineProperty(obj2, 'a', {
    value: 1,
    configurable: true, // 可配置的
    enumerable: true, // 可枚举的，定义属性是否可以被for ... in 以及Object.Keys()枚举。但是getOwnPropertyNames可以拿到。
    writable: true, // 可修改
})

// delete obj1.a // 删除属性
obj2.a = 2 // 修改
Object.defineProperty(obj2, 'b', {
    value: 1,
})

Object.defineProperty(obj2, 'c', {
    value: 2
})
for(let k in obj2){
    console.log(k); // for in 无法遍历
}

console.log(Object.keys(obj2)); // 打印空数组

console.log(Object.getOwnPropertyNames(obj2)); // getOwnPropertyNames可以绕过enumerable为fasle的限制。

// set get

var obj3 = {}
Object.defineProperty(obj3, 'a', {
    get () {
        console.log('gte a:')
    },
    set (newValue) {
        document.getElementById('root').innerHTML = `<span>${newValue}</span>`
    }
})

var index = 0;
setInterval(() => {
    obj3.a = index ++ // 不断改变属性，set函数被不断触发执行；
}, 1000);
obj3.a // 读取值时触发get执行

console.log(obj3);

// descriptor对象中不可以(value || writable) && (get || set)
// const obj4 = {}
// Object.defineProperty(obj4, 'a', {
//     writable: false,
//     set() {

//     }
// }) // 报错

// Object.defineProperty(obj4, 'b', {
//     value: 1,
//     get () {
//         return this.value
//     }
// })// 报错
