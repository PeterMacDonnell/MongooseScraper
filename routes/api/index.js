var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./note");
var headlineRoutes = require("./headline");
var clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;