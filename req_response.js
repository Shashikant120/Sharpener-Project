
let http=require('http');
let server=http.createServer((req,res)=>{
    let url=req.url;
    if (url=="/home"){
        res.write("<html>")
        res.write("<body><h1>Welcome Home</h1>")
        res.write("</html>")
        
    }
    if(url=="/about"){
        res.write("<html>")
        res.write("<body><h1>Welcome to About Us Page</h1>")
        res.write("</html>")
       
    }
    if(url=="/node"){
        res.write("<html>")
        res.write("<body><h1>Welcome to my Node Js project</h1>")
        res.write("</html>")
       
    }
    res.end();
   
});
server.listen(8000);