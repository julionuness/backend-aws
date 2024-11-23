const express = require("express");
const serverless = require("serverless-http"); // Middleware para Lambda
const app = express();
const con = require("./main"); // Importa a conexão do banco

app.use(express.json());

app.get("/get", async (req, res) => {
  console.log("Chegou no GET");
  res.set("Access-Control-Allow-Origin", "*");

  try {
    // Consulta ao banco e envio dos dados como resposta
    const result = await con.query("SELECT * FROM pizzas");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao consultar o banco de dados", err.message);
    res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }
});

// Exporta o app como um handler para o AWS Lambda
module.exports.handler = serverless(app);
