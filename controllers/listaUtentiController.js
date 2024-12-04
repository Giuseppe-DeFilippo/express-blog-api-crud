// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)
//operazioni index show update  destroy create;

const lista = require("../data/listaPost");
const listaUtenti = require("../data/listaUtenti");

function index(req, res) {
    res.json(listaUtenti);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const idUtenti = listaUtenti.find((utente) => utente.id === id);
    res.json(idUtenti);
}

function create(req, res) {

}



module.exports = { index, show }