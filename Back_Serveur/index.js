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
    password: "FifalianA45" ,//Your password postgresql
    port: 5432 // default port on postgresql
  });
  console.log("Connexion réussie à la base de données");

app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000/) !");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/income", (req, res) => {
  res.render("income");
});

app.get("/", (req, res) => {
  const countQuery = `
    SELECT COUNT(*) AS count_user
    FROM "user"
  `;

  const userQuery = `
    SELECT *
    FROM "user"
    ORDER BY id_user
  `;

  const payQuery = `
    SELECT "user".user_first_name, pay."value", pay.payement_date, pay.reason, pay.week
    FROM "user"
    INNER JOIN pay ON "user".id_user = pay.id_user
    ORDER BY pay.id
    LIMIT 5
  `;
  
  const accountQuery = `SELECT total_money FROM group_account`;

  pool.query(countQuery, [], (err, countResult) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur de serveur');
    }

    pool.query(userQuery, [], (err, userResult) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Erreur de serveur');
      }

      pool.query(payQuery, [], (err, payResult) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send('Erreur de serveur');
        }
        pool.query(accountQuery, [], (err, accountResult) => {
          if (err) {
            console.error(err.message);
            return res.status(500).send('Erreur de serveur');
          }

          res.render("index", {
            countUser: countResult.rows[0].count_user,
            user: userResult.rows,
            pay: payResult.rows,
            account: (accountResult.rows && accountResult.rows.length > 0) ? accountResult.rows[0].total_money : 0
          });
        });
      });
    });
  });
});
