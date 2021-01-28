
const handleBlogRoute = require('./src/routes/blog')

const querystring = require('querystring')
function serverHandler(req,res) {

    //获取path
    var url = req.url;
    var path = url.split('?')[0];
    req.path = path;

    //解析query

    req.query = querystring.parse(url.split('?')[1]);

    res.setHeader('Content-type','application/json');
    const blogData = handleBlogRoute.handBlogRoute(req,res);
    
    if(blogData){
        res.end(JSON.stringify(blogData));
        return;
    }
    
    
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.write('404 Not Found');
    res.end()
}
module.exports = {serverHandler}
