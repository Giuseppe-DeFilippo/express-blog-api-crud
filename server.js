
// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.use("/api/post", postRouter);

app.listen(process.env.port, () => {
    console.log(`Server in esecuzione su http://localhost:${process.env.port}`);
}); 
