const http = require('http');

const server = http.createServer((req, res) =>{
        res.write("hello from basic node app");
        res.end();
});
server.listen(1000, () => {
        console.log("server is running on port 1000");
});