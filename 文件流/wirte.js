/*
 * @Description: 写入、写出、读取文件流
 * @Autor: sy
 * @Date: 2021-05-28 19:45:55
 * @LastEditors: sy
 * @LastEditTime: 2021-05-28 20:20:56
 */

const fs = require('fs')
 let ws=fs.createWriteStream('hello.txt',{flags:'w',encoding:'utf-8'})
 
 
 ws.on('open',function(){
     console.log('文件打开')
 })

 ws.on('read',function(){
     console.log("文件准备写入")
 })
  
 ws.on('close',function(){
    console.log('文件写入完成 关闭')
})

ws.write('hello word',function(error){
    if(error){
        console.log('写入出错')
    }else{
        console.log('写入成功')
    }
})

ws.end(function(){
    console.log('写入完')
})

