var router = require("express").Router();
var db = require("../models");

router.get("/", function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  });



module.exports = router;