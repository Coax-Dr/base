// 限制数据的可枚举、可重写
const personalInfoDefine = {
    name: {
        writable: false,
        configurable: true,
        enumerable: true
    },
    gae: {
        writable: false,
        configurable: true,
        enumerable: true
    },
    job: {
        writable: true,
        configurable: true,
        enumerable: true
    },
    publicKey: {
        writable: false,
        configurable: true,
        enumerable: false
    }
}
export { personalInfoDefine };