import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.json({ statusCode: 200, message: "OK" } as IResponse),
);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

export interface IResponse {
  data?: any;
  message?: string;
  statusCode: number;
}
