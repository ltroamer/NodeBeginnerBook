var http = require("http");

// Pass the function onRequest to createServer 
http.createServer(onRequest).listen(8888)

function onRequest(request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("Hello");
    response.end();
}