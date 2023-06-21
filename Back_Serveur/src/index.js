import express from "express";
const app = express();
import { join } from "path";
import { router } from "./router.js";
import { getRacine } from "./utils.js";

// Configure le moteur de rendu EJS
app.set("view engine", "ejs")
app.set("views", join(getRacine(), "views"));
app.use(express.static(join(getRacine(), "public")));
app.use(router);


//Connect Database 
console.log("Connexion réussie à la base de données");

app.listen(8000, () => {
    console.log("Serveur démarré (http://localhost:8000/) !");
});

