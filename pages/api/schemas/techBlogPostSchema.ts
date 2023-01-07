const mongoose = require("mongoose");

const techBlogPostSchema = new mongoose.Schema(
  {
    sno: { type: Number },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String, required: false },
    views: { type: Number },
  },
  { timeStamps: true, collection: "blog_tech" }
);

mongoose.models = {};

export default mongoose.model("techBlogDb", techBlogPostSchema);
