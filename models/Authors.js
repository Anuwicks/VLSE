import mongoose from "mongoose";

const AuthorsSchema = mongoose.Schema({
  authors: [String],
});

const Authors = mongoose.model("Authors", AuthorsSchema);

export default Authors;
