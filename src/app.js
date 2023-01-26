import express from "express";

const app = express();
const PORT = 8080;

//configuración del servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto: ${PORT}`);
});

//si tenemos un error
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);

const productsRouter = await (await import("./routes/products.js")).default;

app.use("/products/", productsRouter);

export default app;
