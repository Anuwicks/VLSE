import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import publicationRoutes from "./routes/publications";
require("dotenv").config();
import path from "path";

//Initialise express erver
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use("/api/publications", publicationRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.json());
