import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  try {
    // Generăm o eroare doar pentru testare
    throw new Error("Eroare de test");
  } catch (error) {
    const logMessage = `${new Date().toISOString()} - ${error.stack}\n`;

    fs.appendFile("errors.log", logMessage, (err) => {
      if (err) {
        console.error("Nu s-a putut scrie în errors.log:", err);
      }
    });

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

server.listen(3000, () => {
  console.log("Serverul rulează pe portul 3000");
});
