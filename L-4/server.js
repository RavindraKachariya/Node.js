const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // favicon request ignore
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    // user log message
    const msg = `New User | Time: ${new Date().toLocaleString()} | IP: ${req.socket.remoteAddress}\n`;

    fs.appendFile('userLog.text', msg, () => { });

    console.log("Request URL: ", req.url);

    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = "index.html";
            break;
        case '/contact':
            fileName = "contact.html";
            break;
        case '/blog':
            fileName = "blog.html";
        case '/gallary':
            fileName = "gallary.html";
            break;
        default:
            fileName = "404.html";
            break;
    }

    fs.readFile(fileName, (err, result) => {
        if (err) {
            res.end("Error loading page");
        }
        res.end(result);
    });
});

server.listen(8000, () => {
    console.log("Server started at http://localhost:8000");
});