// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt, { Secret } from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoose";
import users from "./schemas/users";

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
  if (req.method === "POST") {
    try {
      let refreshToken = req.body.token;
      // let currestUser: users | null = await users.findOne({ refreshToken }).select("-passWord");
      let currestUser: users | null = await users
        .findOne({ userId: "2919534f-11b6-460a-a736-a7c37002c77d" })
        .select("-passWord");
      console.log("current User", currestUser);
      if (refreshToken === null) return res.status(401);
      if (!currestUser?.refreshToken) return res.status(403);
      jwt.verify(currestUser.refreshToken, jwtSecret as Secret, (err, user) => {
        if (err) return res.status(403);
        const data: updateData = {
          user: {
            id: user["user"].id,
          },
        };
        const accessToken = genAccessToken(data);
        return res.status(200).json({ accessToken });
      });
    } catch (error) {
      return res.status(400).json({ message: "Please enter Correct Credentials" });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
const genAccessToken = (data: updateData) => {
  return jwt.sign(data, jwtSecret as Secret, { expiresIn: "30s" });
};
export default connectDb(handler);
