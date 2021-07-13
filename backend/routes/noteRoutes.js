const express = require("express");
const { getAllNotes } = require("../controllers/noteControllers");
const router = express.Router();

router.get("/", getAllNotes);
// router.post("/create", createNote);
// router.delete("/delete/:id", deleteNote);
// router.put("/update/:id", updateNote);
// router.get("/singlenote/:id", getSingleNote);

module.exports = router;
