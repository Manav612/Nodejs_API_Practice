const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.json({ msg: "ok manav" });
});

module.exports = router;
