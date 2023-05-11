const express = require("express");
const { Pool } = require("pg");
const app = express();
const path = require("path");


// Configure le moteur de rendu EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//Connect Database 



const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance",
    password: "" ,//Your password postgresql
    port: 5432 // default port on postgresql
  });
  console.log("Connexion réussie à la base de données");

  

app.listen(3000, () => {
  console.log("Serveur démarré (http://localhost:3000/) !");
});

app.get("/", (req, res) => {
  // res.send("Hello word...");
  res.render("index");
});