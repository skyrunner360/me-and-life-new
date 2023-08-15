import axios from "axios";
import BlogPosts from "./BlogPosts";
import TechBlog from "./TechBlog";
import Writings from "./Writings";

const Token = process.env.NEXT_PUBLIC_JWT_TOKEN;

interface slugData {
  slug: string | string[] | undefined;
}
interface changeData {
  slug: string;
  data: { title: string; content: string; slug: string };
}

interface addData {
  insert: {
    title: string;
    content: string;
    slug: string;
    author: "skyrunner" | string;
    category: string;
  };
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

export const deleteBlog = (slugObj: slugData) => {
  return axios.delete("blogPost", {
    headers: { Authorization: Token },
    data: JSON.stringify(slugObj),
  });
};

export const changeBlog = (vars: changeData) => {
  return axios.patch("blogPost", vars, {
    headers: { Authorization: Token },
  });
};

export const addBlog = (vars: addData) => {
  return axios.put("blogPost", vars, {
    headers: { Authorization: Token },
  });
};

export const getTechBlog = () => {
  return axios.get("techBlog", { headers: { Authorization: Token } });
};

export const deleteTech = (slugObj: slugData) => {
  return axios.delete("techBlog", {
    headers: { Authorization: Token },
    data: JSON.stringify(slugObj),
  });
};

export const changeTech = (vars: changeData) => {
  return axios.patch("techBlog", vars, {
    headers: { Authorization: Token },
  });
};

export const addTech = (vars: addData) => {
  return axios.put("techBlog", vars, {
    headers: { Authorization: Token },
  });
};

export const getWritings = () => {
  return axios.get("writings", { headers: { Authorization: Token } });
};

export const getWriting = (slugObj: slugData) => {
  return axios.get(`writings/?slug=${slugObj.slug}`, { headers: { Authorization: Token } });
};

export const deleteWriting = (slugObj: slugData) => {
  return axios.delete("writings", {
    headers: { Authorization: Token },
    data: JSON.stringify(slugObj),
  });
};
export const changeWriting = (vars: changeData) => {
  return axios.patch("writings", vars, { headers: { Authorization: Token } });
};
export const addWriting = (vars: addData) => {
  return axios.put("writings", vars, { headers: { Authorization: Token } });
};
