// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("this is pukar sharma ");
//     res.end();
// }).listen(4500);




// test (a,b)
// {

// }


function dataControl(req,resp)
{
    resp.write("Hello i am pukar sharma ");
    resp.end();

}
http.createServer(dataControl).listen(4500);