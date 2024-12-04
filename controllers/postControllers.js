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
    if (post === undefined) {
        res.status(404).send("è un errore")
    } else { res.json(post) }

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
    console.log(lista);
    if (indice === -1) {
        res.status(404).send("è un errore")
    } else {
        res.status(204).send()
    };
}
function tagSearch(req, res) {
    const tagScelto = (req.params.tag);
    const listaPost = lista.filter((post) => post.tags.some((tag) => tag === tagScelto));
    //restituisce un booleano per sapere se ce.some
    res.json(listaPost);
}

module.exports = { index, show, create, update, elimina, tagSearch };