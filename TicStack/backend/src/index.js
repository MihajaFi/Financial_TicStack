import express from "express";
import { router } from "./router.js";
import cors from "cors";

const app = express();

// express configuration
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8000, () => {
    console.log("Serveur démarré (http://localhost:8000/) !");
});

