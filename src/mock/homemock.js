let Mock = require("mockjs")
// /aa 拦截
let arr = ["zhangsan","lisi","wangwu","zhaoliu"]
// /api/aa
// Mock.mock("/api/aa", "get", (options)=>{
//     console.log(options); // {url:"/api/aa", type:"get",body:null}
//     return arr
// })
// 正则 /api/aa
Mock.mock(/\/api\/aa/, "get", (options)=>{
    // console.log(options); // {url:"/api/aa", type:"get",body:null}
    return arr
})
// /api/ab
Mock.mock("/api/ab", "post", (options)=>{
    // console.log('10',options);
    return {
        status:200,
        message:"success",
        data:arr
    }
})