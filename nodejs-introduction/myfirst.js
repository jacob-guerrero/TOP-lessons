const http = require("http");
const dt = require("./myFirstModule");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.write("The date and time are currently: " + dt.myDateTime());
    /* res.write(req.url); */
    res.end("Hello World!" + txt);
  })
  .listen(8080);
