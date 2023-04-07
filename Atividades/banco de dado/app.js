const express = require("express")
const app = express()

const db = require("./models/db")

app.get("/", async(req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", async(req, res) => {
    res.sendfile(__dirname + "/html/sobre.html")
})

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080")
})