var http = require('http');

var server = http.createServer((req, res) => {
if (req.url === "/") {
  res.end("Welcome To Home Page!!");
  return;
}
if (req.url === "/about") {
  res.end("Welcome To About Page!!");
  return;
}
  res.end("Page You Are Looking For Cannot Be Found");
})

server.listen(5000);