const car = require("../data/macchine.js");

function index(req, res) {
    res.json(car)
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const cercaMacchina = car.find((macchina) => macchina.id === id);
    res.json(cercaMacchina);
}
function create(req, res) {
    const nuovaMacchina = (req.body);
    nuovaMacchina.id = car.length + 1;
    car.push(nuovaMacchina);
    res.json(car);
}

function update(req, res) {
    const id = (req.params.id);
    const modificaMacchina = (req.params.body);
    let indice = car.indexOf(car.find((macchina) => id === macchina.id));
    car.splice(indice, 1, modificaMacchina);
}
function elimina(req, res) {
    const id = (req.params.id);
    let indice = car.indexOf(car.find((macchina) => id === macchina.id))
    car.splice(indice, 1);
    if (indice === -1) {
        res.status(404).send("errore")
    } else {
        res.status(204).send("ok sei apposto")
    }
}



module.exports = { index, show, create, update, elimina };