import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const PORT = 9000;
const app = express();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sifat:UFGVtb94zyo2CFkc@cluster0.1y1ffct.mongodb.net/booking?retryWrites=true&w=majority"
    );
    console.log("connected to DB.");
  } catch (error) {
    throw error;
  }
};

const Information = mongoose.model("Information", {
  end_year: { type: String },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: String },
  published: { type: String },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
});

app.get("/", async (req, res) => {
  const data = await Information.find();

  res.json(data);
});

app.get("/hello", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  connect();
  console.log("connected to server..." + PORT);
});
