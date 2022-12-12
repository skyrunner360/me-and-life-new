// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt, { Secret } from "jsonwebtoken";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoose";
type Data = {
  message?: string;
  users?: string;
  accessToken?: string;
};
interface users {
  userId: string;
  userEmail: string;
  passWord: string;
  refreshToken?: string | undefined;
  isAdmin?: boolean | undefined;
}
interface updateData {
  user: {
    id: string;
  };
}
const jwtSecret: string | undefined = process.env.JWT_REFRESH_SECRET;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    try {
      let db = (await MongoClient.connect(`${process.env.MONGO_URI}`)).db("test");
      let collection = db.collection("writings_writing");
      let mydata = await collection.find({}).toArray();
      res.status(200).json(mydata);
      // res.status(200).json({ data: data.map(result => result.toObject({getters: true}) });
      // let currestUser: users | null = await users.findOne({ refreshToken }).select("-passWord");
      // if (refreshToken === null) return res.status(401);
      // if (!currestUser?.refreshToken) return res.status(403);
      // jwt.verify(currestUser.refreshToken, jwtSecret as Secret, (err, user) => {
      //   if (err) return res.status(403);
      //   // const data: updateData = {
      //   //   user: {
      //   //     id: user["user"].id,
      //   //   },
      //   // };
      //   // const accessToken = genAccessToken(data);
      //   return res.status(200).json({ accessToken });
      // });
    } catch (error) {
      return res.status(400).json({ message: "Please enter Correct Credentials" });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
// **Obsolute Code**
// const genAccessToken = (data: updateData) => {
//   return jwt.sign(data, jwtSecret as Secret, { expiresIn: "30s" });
// };
// ****
export default connectDb(handler);
