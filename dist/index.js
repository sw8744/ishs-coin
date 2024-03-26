"use strict";
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 8000;
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
var connection = mysql.createConnection({
    host: 'app.ishs.co.kr',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'coin'
});
connection.connect();
app.get('/coin', (req, res) => {
    res.status(200).send("Hello World!");
});
app.get('/coin/info', (req, res) => {
    let owner = req.query.owner;
    connection.query('SELECT * FROM coin WHERE owner=\"' + owner + '\"', function (error, results, fields) {
        if (error)
            throw error;
        console.log(results);
        let len = results.length;
        res.status(200).send(len.toString());
    });
});
app.post('/coin/generate', (req, res) => {
    console.log(req.body);
    let time = Date.now();
    let owner = req.body.owner;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(owner + time.toString(), salt);
    console.log(hash);
    connection.query('INSERT INTO coin (kind, `hash`, owner) VALUES (\"' + '시그마 코인' + '\", \"' + hash + '\", \"' + owner + '\")', function (error, results, fields) {
        if (error)
            throw error;
        console.log(results);
        res.sendStatus(200);
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
