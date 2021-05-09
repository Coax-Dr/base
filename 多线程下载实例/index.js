const { exec } = require("node:child_process");
const { resolve } = require("node:path");

function concatenate(arrays) {
  if (!arrays.length) return null;

  let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

  let result = new Uint8Array(totalLength);

  let length = 0;

  for (let array of arrays) {
    result.set(array, length);
    length += array.length;
  }

  return result;
}


function getContentLength(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("HEAD", url);
    xhr.send();
    xhr.onload = () => {
      resolve(
        xhr.getResponseHeader("Content-Length")
      )
    }
    xhr.onerror = reject;
  })
}

function getBinaryContent(url, start, end, i) {
  return new Promise((resolve, reject) => {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.setRequestHeader("range", `bytes=${start}-${end}`); // 范围请求
      xhr.responseType = "arraybuffer";
      xhr.onload = () => {
        resolve({
          index: i,
          buffer: xhr.response // 请求范围内对应的数据
        });
      };
      xhr.send();
    } catch (error) {
      reject(new Error(error));
    }
  })
}

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务

  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));

    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制。
    if (poolLimit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));

      executing.push(e);

      if (executing.length > poolLimit) {
        await Promise.race(executing); // 等待较快的任务完成
      }
    }
  }

  return Promise.all(ret);
}

async function download({ url, chunkSize, poolLimit = 1 }) {
  const contentLength = await getContentLength(url);

  const chunks = typeof chunkSize === 'number' ? Math.ceil(contentLength / chunks) : 1;

  const results = await asyncPool(
    poolLimit,
    [...new Array(chunks).keys()],
    (i) => {
      let start = i * chunkSize;
      let end = i + 1 === chunks ? contentLength - 1 : (i + 1) * chunkSize - 1;
      return getBinaryContent(url, start, end, i);
    }
  );

  const sortedBuffers = results.map((item) => new Uint8Array(item.buffer));
  return concatenate(sortedBuffers);
}