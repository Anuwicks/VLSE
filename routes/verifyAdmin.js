require("dotenv").config();
export default function (req, res, next) {
  const token = req.header("auth-token");

  if (!token) return res.status(401).send("Access Denied");

  try {
    if (token === process.env.ADMIN_TOKEN) {
      next();
    } else {
      res.send("Invalid token");
    }
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
