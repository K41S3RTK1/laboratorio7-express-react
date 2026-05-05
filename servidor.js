import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Servidor activo");
    return;
  }

  if (req.url === "/info") {
    const info = {
      mensaje: "Ruta de información del laboratorio",
      curso: "Sistemas y Tecnologías Web",
      tecnologia: "Node.js"
    };

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(info, null, 2));
    return;
  }

  if (req.url === "/saludo") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Hola, bienvenido a mi servidor de prueba de Node.js");
    return;
  }

  if (req.url === "/api/status") {
    const statusInfo = {
      ok: true,
      status: "Servidor funcionando correctamente",
      puerto: PORT
    };

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(statusInfo, null, 2));
    return;
  }

  if (req.url === "/api/student") {
    try {
      const filePath = path.join(process.cwd(), "datos.json");
      const texto = await fs.readFile(filePath, "utf-8");
      const datos = JSON.parse(texto);

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(datos, null, 2));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "No se pudo leer datos.json" }, null, 2));
    }
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`Ruta no encontrada: ${req.url}`);
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});