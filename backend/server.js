import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import db from "./config/db.js";
import 'dotenv/config'

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*',
}));

app.get("/students/", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM students");
    res.json(rows);
});


app.get("/students/:id", async (req, res) => {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM students WHERE id=?", [id]);
    res.json(rows);
});

app.post("/students", async (req, res) => {
    const {id, name, group: groupName} = req.body;
    const [result] = await db.query(
        "INSERT INTO students (id, name, `group`) VALUES (?, ?, ?)",
        [id, name, groupName]
    );
    res.json({
        id: result.insertId,
        name,
        group: groupName
    });
});

app.get("/payments", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM payments");
    res.json(rows);
});


app.get("/payments/:id", async (req, res) => {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM payments WHERE student_id=?", [id]);
    res.json(rows);
});


app.post("/payments", async (req, res) => {
    const {id, student_id, amount, month} = req.body;
    if (!id || !student_id || !amount || !month) {
        return res.status(400).json({error: "Please fill all fields"});
    }
    const [result] = await db.query(
        "INSERT INTO payments (id, student_id, amount, month) VALUES (?, ?, ?, ?)",
        [id, student_id, amount, month]
    );
    res.json({id: result.insertId, student_id, amount, month});
});

app.listen(process.env.PORT||3000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});