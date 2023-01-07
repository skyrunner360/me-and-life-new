// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoose";
import WritingsDb from "./schemas/writingsSchema";
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
  views: number;
}
interface updateData {
  user: {
    id: string;
  };
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    try {
      let db = await WritingsDb.find();
      return res.status(200).json({ data: db });
    } catch (error) {
      return res.status(400).json({ message: "Please enter Correct Credentials" });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
export default connectDb(handler);
