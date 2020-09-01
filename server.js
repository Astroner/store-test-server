const express = require("express");
const { json } = require("body-parser");
const cors = require("cors")
require("dotenv").config();

const { asArray } = require("./categories");
const merch = require("./entities")

const app = express();

app.use(cors())
app.use(json())

app.get("/merchandise/", (req, res) => {
    if (req.query.category) {
        res.json(merch.filter(item => item.category+"" === req.query.category))
        return
    }
    res.json(merch)
})

app.get("/merchandise/:id", (req, res) => {
    const tempo = merch.find(d => d.id + "" === req.params.id)
    if (!tempo) res.sendStatus(404)
    else res.json(tempo)
})

app.get("/categories/", (req, res) => {
    res.json(asArray)
})

app.get("/categories/:id", (req, res) => {
    const tempo = asArray.find(d => d.id + "" === req.params.id)
    if (!tempo) res.sendStatus(404)
    else res.json(tempo)
})

app.post("/purchase", (req, res) => {
    if (!req.body || !req.body.length) return res.status(400).json({ details: "Invalid body format" })
    setTimeout(() => {
        res.sendStatus(201)
    }, 300);
})

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server is litening on http://${process.env.HOST}:${process.env.PORT}`)
})