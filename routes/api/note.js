var router = require("express").Router();
var db = require("../models");

router.get("/:id", function(req, res) {
    db.Note.find({ _headlineId: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  });



router.post("/", function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
      res.json(dbNote);
    });
  });



router.delete("/:id", function(req, res) {
    db.Note.remove({ _id: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  });

module.exports = router;
