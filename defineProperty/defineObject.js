export function useStrictObject(data, desc) {
    if (typeof data !== 'object' || data === null) { // 判断是否为对象
        throw new TypeError('we need a type object without null');
    }
    if (!Array.isArray(data)) { // 判断是否为数组
        return defineObject(data, desc);
    }
    return data.map(item => {
        return defineObject(item, desc);
    })
}


function defineObject(data, desc) { // 将配置与属性混合
    let _obj = new ConstructObject();
    for (let k in data) {
        Object.defineProperty(_obj, k, {
            ...desc[k],
            value: data[k]
        })
    }

    return _obj;
}

function ConstructObject() {
    for(let k in ConstructObject.prototype) {
        Object.defineProperty(ConstructObject.prototype, k, {
            enumerable: false,
            writable: false,
            configurable: false
        })
    }
}

ConstructObject.prototype.setConfig = function (prop, desc, value) {
    Object.defineProperty(this, prop, {
        [desc]: value
    })
}