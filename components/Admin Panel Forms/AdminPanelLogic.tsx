import axios from "axios";
import BlogPosts from "./BlogPosts";
import TechBlog from "./TechBlog";
import Writings from "./Writings";

export const ActivePanelMap = {
  blog: <BlogPosts />,
  tech: <TechBlog />,
  writing: <Writings />,
};
export const getBlogs = () => {
  return axios.get("blogPost", {
    headers: { Authorization: process.env.NEXT_PUBLIC_JWT_TOKEN },
  });
};
