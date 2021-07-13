const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();
connection();
app.use(express.json());

// app.get("/", (req, res) => {
//    res.status(200).send("Welcome");
// });

// app.get("/api/notes", (req, res) => {
//    res.send(notes);
//    res.status(200).send(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Now listening on port " + PORT);
});
