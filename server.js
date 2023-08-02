import tls from 'tls'
const HOST = '127.0.0.1', PORT = 1337

const server = tls.createServer({}, function (socket) {
  socket.write("I am the server sending you a message.");

  socket.on('data', function (data) {
    console.log(`Received data the client `, data)
  })
  socket.on('end', function () {
    console.log('EOT (End Of Transmission)');
  });
})

server.listen(PORT, HOST, () => {
  console.log("I'm listening at %s, on port %s", HOST, PORT);
})