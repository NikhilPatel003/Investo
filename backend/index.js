require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {HoldingsModel} = require("./models/HoldingsModel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");
const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Nikhil Is genious");
});

app.get("/allHoldings", async (req,res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})

app.get("/allPositions", async (req,res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
})

app.get("/allOrders", async (req,res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})

app.post("/newOrder" , async (req,res) => {
  let newOrder = new OrdersModel(req.body);

  newOrder.save();

  res.send("Order Saved !")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
