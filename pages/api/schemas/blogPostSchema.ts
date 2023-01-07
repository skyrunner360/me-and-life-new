const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    sno: { type: Number },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String, required: false },
    img2: { type: String, required: false },
    img3: { type: String, required: false },
    img4: { type: String, required: false },
    img5: { type: String, required: false },
    img6: { type: String, required: false },
    views: { type: Number },
  },
  { timeStamps: true, collection: "blog_post" }
);

mongoose.models = {};

export default mongoose.model("blogPostDb", blogPostSchema);
