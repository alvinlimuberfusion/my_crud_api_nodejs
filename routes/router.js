const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/api/tasks", controller.create);
router.get("/api/tasks", controller.getAll);
router.get("/api/tasks/:id", controller.getTask);
router.put("/api/tasks/:id", controller.update);
router.delete("/api/tasks/:id", controller.delete);

module.exports = router;
