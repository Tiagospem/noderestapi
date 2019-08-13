const express = require("express");

const routes = express.Router();

const ProductsController = require("./controllers/ProductController");

routes.get("/products", ProductsController.index);
routes.post("/products", ProductsController.store);
routes.put("/product/:id", ProductsController.update);
routes.get("/product/:id", ProductsController.show);
routes.delete("/product/:id", ProductsController.destroy);

module.exports = routes;
