const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res, next) => {
   const notes = await Note.find();
   res.status(200).json(notes);
});

module.exports = { getAllNotes };
