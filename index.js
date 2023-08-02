import { createReadStream, readFile, readFileSync } from 'fs'
import http from 'http'




function initInstanceServer(req, res) {


  if(req.url == '/' && req.method == 'GET'){
    res.writeHead(200, {'Content-Type':'text/html'})
    const contentHTML = readFileSync('./views/index.html')
    res.write(contentHTML)

    return res.end()
  }
}


http.createServer(initInstanceServer)
  .listen(3000, () => console.log(`Running App Media... {http://localhost:3000}`))