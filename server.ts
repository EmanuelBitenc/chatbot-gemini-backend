const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 5000;
app.use(cors({ origin: "http://localhost:5173" }));
const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Erro a usar api: ", error);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
