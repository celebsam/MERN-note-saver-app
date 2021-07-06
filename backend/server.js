const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
   res.send("welcome");
});

app.get("/api/notes", (req, res) => {
   res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
   console.log(req.params);
   const note = notes.find((note) => note._id === +req.params.id);
   if (note) {
      res.send(note);
   } else {
      res.status(404).send("No note found.");
   }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Now listening on port " + PORT);
});
