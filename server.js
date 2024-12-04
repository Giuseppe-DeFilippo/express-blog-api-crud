//     - In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
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

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});