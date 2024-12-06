
// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)

const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.use("/bacheca", require("./routers/post.js"));
app.use("/utenti", require("./routers/listaUtenti.js"))
app.use("/macchine", require("./routers/macchine.js"))
app.use(require("./middleware/postErroreMIddleware.js"));
app.use(require("./middleware/gestioneRotteMIddleware.js"));

app.listen(process.env.port, () => {
    console.log(`Server in esecuzione su http://localhost:${process.env.port}`);
}); 
