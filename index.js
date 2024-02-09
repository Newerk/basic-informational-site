const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http
  .createServer((req, res) => {
    const filePath = path.join(
      __dirname,'pages',
      req.url === "/" ? "index.html" : req.url
    );

    fs.readFile(filePath, (err, content) => {
      if (err) {
        fs.readFile(path.join(__dirname, 'pages', "404.html"), (err, content) => {
          if (err) throw err;
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  })
  .listen("8080", () => console.log("Running server on port 8080..."));
