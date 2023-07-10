import { Router } from "express";
import { pool } from "./database.js";
import { authentificate } from "./security/authentificate.js";

export const router = new Router();



// =================Affichage===========
router.get("/home", (req, res) => {
    const countQuery = `
            SELECT "user".*, pay."value",pay."reason"
            from "user" 
            inner join pay on "user".id = pay.id_user;
        `;

    pool.query(countQuery, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur de serveur');
        }
        res.send(data.rows);
    });
});

router.get("/withdrawalaccount", (req, res) => {
    const withdrawalQuery = `
    select sum(value) as sumvalue from withdrawal;
        `;
    const countQuery = `
        select (
            (
                SELECT SUM(value) as sum_withdrawal FROM withdrawal
            ) - 
            (
                SELECT SUM(value) as sum_pay FROM pay
            )
        ) as account;
    `
    const result = {
        sumpay: 0,
        sumwithdrawal: 0
    };

    pool.query(withdrawalQuery, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur de serveur');
        }
        result.sumwithdrawal = data.rows;
        pool.query(countQuery, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erreur de serveur');
            };
            result.sumpay = data.rows;
            res.send(result);
        })
    });
});

router.post("/signin", authentificate);