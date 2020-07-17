import dotenv from "dotenv";
import express from "express";
import { OrderService } from "./services";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const orderService = new OrderService();

app.post("/", async (req, res) => {
  res.json({ statusCode: 200, message: "OK" } as IResponse<null>);
});

app.post("/create-hotel", async (req, res) => {});

app.post("/create-room", async (req, res) => {});

app.post("/create-order", async (req, res) => {
  const result = await orderService.createOrder();
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

export interface IResponse<T> {
  data?: T;
  message?: string;
  statusCode: number;
}
