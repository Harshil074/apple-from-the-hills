import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

let orders = [];

app.get("/", (req, res) => {
  res.send("Apple Hills Backend Running 🍎");
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Red Delicious", price: 180 },
    { id: 2, name: "Golden Apple", price: 200 },
  ]);
});

app.post("/api/order", (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ message: "Order saved successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
