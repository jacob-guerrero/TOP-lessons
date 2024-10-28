const { Router } = require("express");

const contactRouter = Router();

contactRouter.get("/", (req, res) => res.send("All contacts"));
contactRouter.post("/", (req, res) => res.send("Add a contact"));

module.exports = contactRouter;
