import jwt from "jsonwebtoken"
import generateAccessToken from "./token.js"
import { pool } from "../database.js";
import dotenv from "dotenv";

//dotenv configuration
dotenv.config();

//give page if token exist and valid
export function getPageAuthentificate(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token === null){
        return res.status(301).send({message :"ERROR, authentificate error"});
    }

    jwt.verify(token, process.env.JWT_TOKEN,(err, user) => {
        if (err){
            return res.status(301).send({message: "ERROR, authentificate error"});
        }
        next();
    });
}

//manage authentificate login
export function authentificate(req,res){
    const { username, password } = req.body;
    const sql = `
        SELECT id FROM "user" WHERE username='${username}' and password='${password}';
    `
    pool.query(sql, (err, data)=>{
        if(err){
            console.log(error);
            res.status(404).send({ serverError: true, authentificate :false });
        }
        if(data.rows.length === 0){
            res.status(303).send({ authentificate: false })
        }
        else{
            const token = generateAccessToken({ username: username, password: password });
            const id = data.rows[0].id;
            
            res.send({ authentificate: true, token: token, user_id: id });
        }
        
    });
}