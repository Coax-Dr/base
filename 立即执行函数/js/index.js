// 立即执行函数
// IIFE Immediately Invoked Function Expression


 // 当一个函数需要立即执行的时候，该函数必须是函数表达式。

 // 必须是函数表达式不可以是函数声明

 // 让函数声明变成表达式
var fn = function () {
    console.log('Function Expression');
}();

+ function () {
    console.log('Function Expression');
}();

- function () {
    console.log('Function Expression');
}();

! function() {
    console.log('Function Expression');
}();

// 实践中
;(function (a, b, c) {
    console.log(a, b, c);
})(1,2,3); // 由于js通过;来判断代码段，而立即执行函数的括号太多导致js无法判定，所以需要手动在2立即执行函数开头添加;防止因为其他开发人员不写;而导致的编译报错。

(() => {
    console.log('Function Expression');
})();


;(function test(a, b, c, d) {
    // 独立作用域
    // 执行完成，立即销毁
    // ES3 ES5是没有模块的概念，使用立即执行函数来模拟。
    console.log(test);
    console.log(test.length); // 打印参数列表
    cionsole.log(arguments.length); // 打印实参列表
})(1, 2, 3);
