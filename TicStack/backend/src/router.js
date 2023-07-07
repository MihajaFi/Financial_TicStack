import { Router } from "express";
import { pool } from "./database.js";

export const router = new Router();

router.get("/home", (req, res) => {
    const countQuery = `
        SELECT "user".*, pay."value",pay."reason",withdrawal."value" as drawalvalue
        from "user" 
        inner join pay on "user".id = pay.id_user
        inner join withdrawal on "user".id = withdrawal.id_user;
    `;
    
    pool.query(countQuery, (err, data) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Erreur de serveur');
        }
        res.send(data.rows);
    });
});