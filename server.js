
// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)

const express = require("express")
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.use("/bacheca", require("./routers/post.js"));
app.get("/", (req, res) => {
    res.send("server del mio blog")
})
app.use("/utenti", require("./routers/listaUtenti.js"))

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});