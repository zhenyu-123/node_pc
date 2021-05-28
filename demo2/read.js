/*
 * @Description: 读取一个大文件 然后在写入到另一个文件中
 * @Autor: sy
 * @Date: 2021-05-28 21:00:33
 * @LastEditors: sy
 * @LastEditTime: 2021-05-28 21:11:25
 */

const fs = require('fs')

let rs = fs.createReadStream('movie.mp4')
let  ws = fs.createWriteStream('copy.mp4')

rs.on('data',function(chunk){
    console.log(chunk)
    ws.write(chunk,function(err){
        if(err){
            console.log('写入失败')
        }else{
            console.log(`接收到 ${chunk.length} 个字节的数据`);
            console.log('写入成功')
        }
    })
})