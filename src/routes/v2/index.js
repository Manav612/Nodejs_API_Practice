const express = require("express");

const { GreetingsController } = require("../../controllers");

const router = express.Router();

router.get("/greetings", GreetingsController.greetings);

module.exports = router;
