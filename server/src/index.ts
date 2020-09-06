import express from "express";
import {DummyDataGenerator} from "./dummyData";

const app: express.Application = express();

const products = new DummyDataGenerator().generateProducts(10);

app.get("/api/products/:id", (req: any, res: any) => {
  console.log("req: ", req.params.id);
  if (req.params.id) {
    const product = products.find(p => p.id === req.params.id);
    console.log("product: ", product)
    if (product) {
      res.send(product);
      return;
    }
  }
  res.status(404).send();
});

app.get("/api/products", (req: any, res: any) => {
  res.send(products);
});

app.listen(8080);
