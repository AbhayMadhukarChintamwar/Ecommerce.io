import express, { Router } from "express";
import ProductController from "./product.controller.js";
const route = express.Router();

const productController = new ProductController();
route.get('/',productController.getAllProducts);
route.post('/', productController.addProduct);
route.get('/', productController.getOneProduct);
export default route;