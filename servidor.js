import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Servidor activo con Express");
});

app.get("/info", (req, res) => {
  const info = {
    mensaje: "Ruta de información del laboratorio",
    curso: "Sistemas y Tecnologías Web",
    tecnologia: "Express"
  };

  res.json(info);
});

app.get("/saludo", (req, res) => {
  res.type("text/plain");
  res.send("Hola, bienvenido a mi servidor de prueba con Express");
});

app.get("/api/status", (req, res) => {
  const statusInfo = {
    ok: true,
    status: "Servidor funcionando correctamente",
    puerto: PORT,
    framework: "Express"
  };

  res.json(statusInfo);
});

app.get("/api/student", async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "datos.json");
    const texto = await fs.readFile(filePath, "utf-8");
    const datos = JSON.parse(texto);

    res.json(datos);
  } catch (error) {
    res.status(500).json({
      error: "No se pudo leer datos.json"
    });
  }
});

app.use((req, res) => {
  res.status(404);
  res.type("text/plain");
  res.send(`Ruta no encontrada: ${req.originalUrl}`);
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
