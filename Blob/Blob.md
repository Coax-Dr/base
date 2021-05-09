# 什么是blob
> Binary Large Object 表示二进制类型的大对象。通常是影像、声音、或者多媒体文件。在JavaScript中Blob类型表示不可变的类似文件对象的原始数据。

# blob的组成 const aBlob = new Blob(blobParts, options);

## blobParts: 它是由ArrayBuffer, ArrayBufferView, Blob, DOMString等对象构成的数组。

## options: 是一个可选对象，包含以下两个属性：
> type 代表放入blob中数组内容的MIME类型。
> endings 默认值为"transparent", 用于指定带有'\n'的字符串如何让被写入。两个值，native 代表'\n'会被更改为适合宿主系统的符号。transparent 不会随着宿主系统的变化而变化。

# blob对象的两个属性
> size: 只读 表示blob对象中所包含数据的大小。

> type: 表示blob对象所包含的数据的MIME类型。

# blob对象的不可变性。