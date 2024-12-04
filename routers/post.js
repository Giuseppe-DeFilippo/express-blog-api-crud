const express = require("express");
const { index, create, update, show, elimina } = require("../controllers/postControllers");
const router = express.Router();

router.get("", index);

//show
router.get("/:id", show);

//create

router.post("", create)

//update per modificare un elemento

router.put("/:id", update)

//delete

router.delete("/:id", elimina)

module.exports = router;