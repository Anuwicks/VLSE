import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin";
import verfiy from "./verifyAdmin";
const router = express.Router();

router.post("/login", async (req, res) => {
  let password = req.body.password;

  try {
    let admin = await Admin.findById("6031ee86d8f3230be84ff646");
    const validPass = await bcrypt.compare(password, admin.password);

    if (!validPass) return res.status(400).send("Invalid Password");
    const token = process.env.ADMIN_TOKEN;
    res.header("auth-token", token).send("login successful");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/verify", verfiy, async (req, res) => {
  res.send(true);
});

export default router;
