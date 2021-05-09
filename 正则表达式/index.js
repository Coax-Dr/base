// 两种表示方法

// 字面量的形式 效率高 直观和便利
let regex1 = /xyz/;

// 构造函数
let regex2 = new RegExp('xyz');


// 接受一个修饰符 

// let regex3 = /xyz/i;

// let regex4 = new RegExp('xyz', i);

// 实例属性

RegExp.prototype.ignoreCase
RegExp.prototype.global
RegExp.prototype.multiline

RegExp.prototype.lastIndex // 下一次开始搜索的位置
RegExp.prototype.source // 要被搜索的对象

// 实例方法

let test1 = /xyz/;

console.log('TEST1:', test1.test('xyz 123'));

console.log(/code/g.test('codllddkcodess'));

// 修饰符 g 如果正则表达式带有g修饰符，则每次test方法都会从上一次结束的位置开始匹配。

let test2 = /a/g;

let str = 'sdabgffaf'

test2.test(str);

console.log('TEST2', test2);
console.log('index1', test2.lastIndex);
console.log('NEXT', test2.test(str));
console.log('index2', test2.lastIndex);


// 匹配规则

// 位置字符

// ^ 表示字符串的开始位置

/^test/.test('test123'); // 表示test必须出现在字符串的开头位置

// $ 表示字符串的结束位置

/test$/.test('newtest') // 表示字符串必须出现在字符串的结束位置

// | 或者选择符

console.log('TEST3', /^11|23/.test('911')); // 11出现在字符串的开头或者字符串中存在23
console.log('TEST4', /11$|34/.test('112311')); // 11出现在字符串的结尾或者34在字符串中

