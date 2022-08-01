const http = require('http')
const PORT = 8080


const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World\n")
})

app.listen(PORT, () => console.log(`Basic azz server started :) on port ${PORT}`))
