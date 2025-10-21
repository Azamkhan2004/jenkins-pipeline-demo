echo "const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.end('Hello from Jenkins Pipeline!');
});
server.listen(port, () => console.log('Server running on port', port));" > app.js
