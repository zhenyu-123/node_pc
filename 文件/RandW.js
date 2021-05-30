/*
 * @Description: 读文件和写文件
 * @Autor: sy
 * @Date: 2021-05-24 22:05:15
 * @LastEditors: sy
 * @LastEditTime: 2021-05-25 09:43:25
 */
let fs = require("fs");

function fsread(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { flag: "r", encoding: "utf-8" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writefs(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(
      path,
      content,
      { flag: "a", encoding: "utf-8" },
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(err);
        }
      }
    );
  });
}
module.exports = {
  fsread,
  writefs,
};
