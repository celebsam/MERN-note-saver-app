const express = require("express");
const {
   getAllNotes,
   createNote,
   getSingleNote,
   updateNote,
   deleteNote,
} = require("../controllers/noteControllers");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect, getAllNotes);
router.post("/create", protect, createNote);
router.delete("/delete/:id", protect, deleteNote);
router.put("/update/:id", protect, updateNote);
router.get("/singlenote/:id", getSingleNote);

module.exports = router;
