const lista = require("./../data/listaPost.js");

function index(req, res) {
    res.json({
        conteggio: lista.length,
        post: lista
    })
}
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = lista.find((post) => id === post.id);
    res.json(post)
}
function create(req, res) {
    const nuovoPost = req.body;
    nuovoPost.id = lista.length + 1;
    lista.push(nuovoPost);
    res.json(lista);
}
function update(req, res) {
    const id = parseInt(req.params.id);
    const modificaPost = req.body;
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    lista.splice(indice, 1, modificaPost);
    res.json(lista);
}
function elimina(req, res) {
    const id = parseInt(req.params.id);
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    lista.splice(indice, 1);
    res.json(lista);
}



module.exports = { index, show, create, update, elimina };