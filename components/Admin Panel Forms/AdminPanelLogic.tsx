import axios from "axios";
import BlogPosts from "./BlogPosts";
import TechBlog from "./TechBlog";
import Writings from "./Writings";

const Token = process.env.NEXT_PUBLIC_JWT_TOKEN;

interface slugData {
  slug: string;
}

export const ActivePanelMap = {
  blog: <BlogPosts />,
  tech: <TechBlog />,
  writing: <Writings />,
};

export const getBlogs = () => {
  return axios.get("blogPost", {
    headers: { Authorization: Token },
  });
};

export const getTechBlog = () => {
  return axios.get("techBlog", { headers: { Authorization: Token } });
};

export const getWritings = () => {
  return axios.get("writings", { headers: { Authorization: Token } });
};

export const deleteWriting = (slugObj: slugData) => {
  return axios.delete("writings", {
    headers: { Authorization: Token },
    data: JSON.stringify(slugObj),
  });
};
