const mongoose = require("mongoose");

const writings_writing = new mongoose.Schema(
  {
    sno: { type: Number },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    // timeStamp: { type: String, required: false, unique: true },
    img: { type: String, required: false },
    views: { type: Number },
  },
  { timeStamps: true, collection: "writings_writing" }
);

mongoose.models = {};

export default mongoose.model("WritingsDb", writings_writing);
