let axios =require('axios')
// let request = require('request')
// request不再维护 https://www.cnblogs.com/goloving/p/13494617.html
let httpUrl="https://vip.1905.com/play/1522763.shtml"
// 获取起始页面所有分类地址

// 获取分类里的电影连接

// 根据电影链接获取电影的详细信息
 axios.get(httpUrl).then((res)=>{
    console.log(res)
 })