const app = require("./app");

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://montebet2020:Ok7akPE6uUnrv4zb@cluster0.n3m0qif.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1)
  });
