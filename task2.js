import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  try {
    throw new Error("Test server error");
  } catch (error) {
    console.error(error.message);

    fs.appendFile(
      "errors.log",
      `${new Date().toISOString()} - ${error.stack}\n\n`,
      (fileError) => {
        if (fileError) {
          console.error("Failed to write error log:", fileError.message);
        }
      },
    );

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

server.listen(3000, () => {
  console.log("Error logging server is running on http://localhost:3000");
});
