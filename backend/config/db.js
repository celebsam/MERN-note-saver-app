const mongoose = require("mongoose");

const connection = () => {
   mongoose
      .connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
      })
      .then(() => {
         console.log("Connected to the database");
      })
      .catch((err) => console.log(err));
};

module.exports = connection;
