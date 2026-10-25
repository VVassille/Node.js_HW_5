import http from "node:http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "PUT") {
    res.statusCode = 200;
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE-запрос обработан");
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("PUT/DELETE server is running on http://localhost:3000");
});
