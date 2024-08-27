const express = require("express");
const router = express.Router();
const newController = require("../controllers/newController");

router.get("/", newController.getNewMessage);
router.post("/", newController.postNewMessage);

module.exports = router;
