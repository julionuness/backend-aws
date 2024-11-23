const { Client } = require("pg");

const con = new Client({
  host: "postgresdatabase.cdmaiqegw65t.sa-east-1.rds.amazonaws.com",
  user: "postgres_user",
  port: 5432,
  password: "projeto123",
  database: "postgres",
  ssl: { rejectUnauthorized: false }, // Adiciona o uso de SSL
});

con.connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados", err.message));

module.exports = con;
