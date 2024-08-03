const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `mongodb is connected with server -: ${data.connection.host}`
      );
    });

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.log("DB error:---" + error);
  });
  db.on("open", () => {
    console.log("Db Is connected successful..");
  });
};

module.exports = connectDatabase;
