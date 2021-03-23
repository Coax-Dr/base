// 同步执行
const P = new Promise((resolve, reject) => {

})


// 异步执行
P.then(res => {

})

// 为什么promise是同步执行，p.then是异步的?
// 解决异步问题同步化：获取promise包裹的任何异步函数的执行结果，并且不阻塞promise以外程序的执行。
// const data = $.ajax(
//     {
//         url: 'http://localhost:3000/data.json',
//         // success (data) {
//         //     console.log(getName(data));
//         // }
//         async: false // 通过设置async同步
//     }
// )
// console.log(data.responseJSON);
// console.log('bao is a crazy guy!');

function getName(data) {
    return data.map(item => item.name);
}

const p = new Promise((resolve, reject) => {
    $.ajax(
        {
            url: 'http://localhost:3000/data.json',
            success (data) {
                resolve(data)
            }
        }
    )
})

// 异步的
p.then(res => {
    console.log(getName(res));
})
console.log('bao is a crazy guy!');
