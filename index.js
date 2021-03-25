
const server = require("./api/server");

const port = 9999

server.listen(port, () => {
  console.log("listening on " + port);
});
