import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(morgan("dev"));

const productsRouter = await (await import("./routes/products.js")).default;
const cartsRouter = await (await import("./routes/carts.js")).default;

app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartsRouter);

const server = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto: ${PORT}`);
});

server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);

export default app;
