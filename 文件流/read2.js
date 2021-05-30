/*
 * @Description: 管道
 * @Autor: sy
 * @Date: 2021-05-28 21:00:33
 * @LastEditors: sy
 * @LastEditTime: 2021-05-28 21:15:02
 */

const fs = require('fs')

let rs = fs.createReadStream('movie.mp4')
let  ws = fs.createWriteStream('b.mp4')

rs.pipe(ws)