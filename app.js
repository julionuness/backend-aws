var express = require("express");
var app = express();
const con = require("./main"); // Importa a conexão do banco

app.use(express.json());


app.post('/post', (req, res) => {
    console.log("Chegou no POST");
    res.set('Access-Control-Allow-Origin', '*');
    
    // Consulta ao banco e envio dos dados como resposta
    con.query('SELECT * FROM pizzas', (err, result) => {
        if (err) {
            console.error("Erro ao consultar o banco de dados", err.message);
            res.status(500).json({ error: "Erro ao consultar o banco de dados" });
        } else {
            // Envia os dados das pizzas como resposta JSON
            res.status(200).json(result.rows);
        }
    });
});

app.listen(9000, () => {
    console.log("Servidor rodando na porta 9000");
});