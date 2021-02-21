import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
