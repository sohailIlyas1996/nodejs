const http=require('http');

const server=http.createServer((req, res)=>{
console.log(req.headers,req.url,req.method);

res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>  <title> My Server</title> </head>');
res.write('<body> <h1> hello its my server </h1></body>');
res.write('</html>');
res.end();

// process.exit();
})

server.listen(2000);
