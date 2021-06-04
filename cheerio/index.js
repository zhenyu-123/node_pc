const cheerio=require("cheerio")
// 获取文本
const axios = require("axios")
let http="https://www.fabiaoqing.com/bqb/detail/id/54471.html"
axios.get(http).then((res)=>{
    // 解析html 文档
 let $ =cheerio.load(res.data)
 $('.swiper-wrapper .swiper-slide a').each((i,ele)=>{
    console.log($(ele).attr('title'))
    console.log($(ele).attr('href'))
 })
})

// 下载图片