import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.json());
