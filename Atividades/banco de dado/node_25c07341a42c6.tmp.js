const express = require("express")
const app = express()

app.get("/", async(req, res) => {
    res.send("pagina inicial")
})

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080")
})