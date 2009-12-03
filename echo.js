var tcp = require('tcp');
var server = tcp.createServer(function (socket) {
  socket.setEncoding("utf8");
  socket.addListener("connect", function () {
    socket.send("hello\r\n");
  });
  socket.addListener("receive", function (data) {
    socket.send(data);
  });
  socket.addListener("eof", function () {
    socket.send("goodbye\r\n");
    socket.close();
  });
});
server.listen(7000, "localhost");

