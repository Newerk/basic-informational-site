const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http
  .createServer((req, res) => {
    let pageURL;
    switch (req.url) {
      case "/":
        pageURL = "index.html";
        break;

      case "/about":
        pageURL = "about.html";
        break;

      case "/contact-me":
        pageURL = "contact-me.html";
        break;

      default:
        pageURL = "404.html";
        break;
    }

    const filePath = path.join(__dirname, "pages", pageURL);

    fs.readFile(filePath, (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  })
  .listen("8080", () => console.log("Running server on port 8080..."));
