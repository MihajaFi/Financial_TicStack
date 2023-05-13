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
    password: "12345678" ,//Your password postgresql
    port: 5432 // default port on postgresql
  });
  console.log("Connexion réussie à la base de données");

app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000/) !");
});




app.get("/", (req, res) => {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM "user") AS count_user,
      *
    FROM
      "user"
    ORDER BY
      id_user
  `;

  pool.query(query, [], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur de serveur');
    }
    
      res.render("index", 
      { 
        countUser: result.rows[0].count_user,
        user: result.rows
      });
    });
  });

