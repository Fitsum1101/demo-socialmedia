let io;

module.exports = {
  init: () => {
    io = require("socket.io-client")("http://localhost:8080");
    return io;
  },
  getSocket: () => io,
};
