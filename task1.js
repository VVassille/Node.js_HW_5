import http from "node:http";

const server = http.createServer((req, res) => {
  const authorization = req.headers.authorization;

  res.setHeader("Content-Type", "text/plain");

  if (!authorization) {
    res.statusCode = 401;
    res.end("Unauthorized");
  } else {
    res.statusCode = 200;
    res.end("Authorization header received");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
