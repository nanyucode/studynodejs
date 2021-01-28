const http = require('http');
const PROT = 8800

const server1 = require('../app.js')

const server = http.createServer((req,res)=> {
    server1.serverHandler(req,res)
});

server.listen(PROT,()=>{
    console.log(`server run port ${PROT}`)
})