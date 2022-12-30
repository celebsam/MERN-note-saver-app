const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();
connection();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

const _dirname = path.resolve();

console.log(_dirname);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "./frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(_dirname, "./frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Now listening on port " + PORT);
});
