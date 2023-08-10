// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/** @type {import("mongoose").Model} */
import type { NextApiRequest, NextApiResponse } from "next";
import authenticate from "../../middleware/authenticateToken";
import connectDb from "../../middleware/mongoose";
import WritingsDb from "./schemas/writingsSchema";
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
        let db = await WritingsDb.find().sort({ _id: -1 });
        const sendDb = await db?.map((elem: responseData) => {
          if (elem.timeStamp === undefined) {
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
        let data = await WritingsDb.findOne({ slug });
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else if (req.method === "PATCH") {
    try {
      let slug = req.body.slug;
      let updateObj = req.body.data;
      await WritingsDb.findOneAndUpdate({ slug }, updateObj);
      return res.status(200).json({ message: "Updated Successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else if (req.method === "PUT") {
    try {
      let insertObj = req.body.insert;
      let instance = new WritingsDb(insertObj);
      await instance.save();
      return res.status(201).json({ message: "Inserted Successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else if (req.method === "DELETE") {
    try {
      let parsedBody = JSON.parse(req.body);
      await WritingsDb.findOneAndDelete({ slug: parsedBody.slug });
      return res.status(204).json({ message: "deleted successfully" });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
export default connectDb(handler);
