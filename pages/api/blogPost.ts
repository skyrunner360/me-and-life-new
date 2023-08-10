// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import authenticate from "../../middleware/authenticateToken";
import connectDb from "../../middleware/mongoose";
import blogPostDb from "./schemas/blogPostSchema";
import { Types } from "mongoose";

interface Data {
  _id?: number;
  message?: string;
  data?: Array<responseData>;
  accessToken?: string;
}
interface responseData {
  _doc: Types.Subdocument;
  _id: number | Types.ObjectId;
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
  authenticate(req, res);
  if (req.body.error)
    return res.status(403).json({ message: `Unauthorized! Invalid Token ${req.body.error}` });
  if (req.method === "GET") {
    try {
      let slug = req.query.slug;
      if (slug === undefined) {
        let db = await blogPostDb.find().sort({ _id: -1 });
        const sendDb = await db?.map((elem: responseData) => {
          // @ts-ignore
          if (elem?._doc?.timeStamp === undefined) {
            let timestamp = elem._doc._id?.getTimestamp();
            const sendObj = { ...elem._doc };
            // @ts-ignore
            sendObj["timeStamp"] = timestamp;
            return sendObj;
          }
          return elem;
        });
        return res.status(200).json({ data: sendDb });
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
      let parsedBody = JSON.parse(req.body);
      await blogPostDb.findOneAndDelete({ slug: parsedBody.slug });
      return res.status(204).json({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
export default connectDb(handler);
