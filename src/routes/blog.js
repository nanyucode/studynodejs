//处理博客相关的路由

const successModel = require("../model/resModule");
const getList = require("../controllers/blog")

 function handBlogRoute(req,res){
    var method = req.method;
    
    console.log(method);
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList.getList(author,keyword);
        return new successModel.successModel(listData);
    }

    if(method === 'GET' && req.path === '/api/blog/detail'){
        return{
            message:'博客详情的接口'
        }
    }

    if(method === 'POST' && req.path ==='/api/blog/new'){
        return{
            message:'新增博客的接口'
        }
    }
    if(method === 'POST' && req.path === '/api/blog/update'){
        return{
            message:'更新博客的接口'
        }
    }
    if(method ==='POST' && req.path === '/api/blog/delete'){
        return{
            message:"删除博客的接口"
        }
    }
    
}
module.exports = {handBlogRoute}