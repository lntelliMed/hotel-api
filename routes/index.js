const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Room = require("../models").Room;



router.get("/", (req, res, next) => {
  Hotel.findAll()
    .then((hotels) => {
      res.status(200).render("index", {hotels: hotels})
    })
    .catch(next);
});

module.exports = router;
