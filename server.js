import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import publicationRoutes from "./routes/publications";
import authRoutes from "./routes/auth";
require("dotenv").config();
import path from "path";

//Initialise express erver
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use("/api/publications", publicationRoutes);
app.use("/api/auth", authRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.json());

//DB connection
try {
  mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log("connected To MongoDB - VLSE cluster")
  );
} catch (err) {
  console.log(err);
}
