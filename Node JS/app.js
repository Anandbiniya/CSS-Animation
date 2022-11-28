var http = require("http");

//c//onst { createServer } = require("http");
// create a serveice
http
  .createServer(function (req, res) {
    //how do we send  a response back to the client
    res.write("Helllo alien");
    res.writeHead(200, { "content-Type": "text.html" });
    res.end();
  })
  .listen(8080);
// create server  inside function accept two parameter one is which we recived from the cient,and second one something we want to send some thing
