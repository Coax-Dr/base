// const myBlob = new Blob(
//   ["宝宝菜的抠脚"],
//   { type: 'text/plain' }
// )

let myBlobParts = ['<html><h2>Hello BaoBao/h2></html>']

let myBlob = new Blob(myBlobParts, { type: 'text/html', endings: 'transparent' })

console.log("SIZE1", myBlob.size);

console.log("TYPE1", myBlob.type);

let hello = new Uint8Array([72, 101, 108, 108, 111])
let blob = new Blob([hello, '', 'semlinker'], { type: 'text/plain' })

console.log('SIZE2', blob.size);

console.log('TYPE2', blob.type)