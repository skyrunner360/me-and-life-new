// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoose";
import blogPostDb from "./schemas/blogPostSchema";

interface Data {
  _id?: number;
  message?: string;
  data?: Array<responseData>;
  accessToken?: string;
}
interface responseData {
  _id: number;
  sno: number;
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  timeStamp: string;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  views: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    try {
      let slug = req.query.slug;
      if (slug === undefined) {
        let db = await blogPostDb.find();
        return res.status(200).json({ data: db });
      } else {
        let data = await blogPostDb.findOne({ slug });
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(400).json({ message: "Please enter Correct Credentials" });
    }
  } else if (req.method === "PATCH") {
    try {
      let slug = req.body.slug;
      let updateObj = req.body.data;
      await blogPostDb.findOneAndUpdate({ slug }, updateObj);
      return res.status(200).json({ message: "Updated Successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else if (req.method === "PUT") {
    try {
      let insertObj = req.body.insert;
      let instance = new blogPostDb(insertObj);
      await instance.save();
      return res.status(201).json({ message: "Inserted Successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else if (req.method === "DELETE") {
    try {
      let slug = req.body.slug;
      await blogPostDb.findOneAndDelete({ slug });
      return res.status(204);
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
export default connectDb(handler);
