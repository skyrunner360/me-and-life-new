// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomUUID } from "crypto";
import jwt, { Secret } from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoose";
import user from "./schemas/writingsSchema";

type Data = {
  message: string;
  authToken?: string;
};

const jwtSecret: String | undefined = process.env.JWT_SECRET;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const data: string | undefined = process.env.JWT_TOKEN_DATA;
    // Generate Token on Sign Up
    let authToken = jwt.sign(data as string, jwtSecret as Secret);
    return res.status(201).json({ message: "Success", authToken });
  } else {
    return res.status(400).json({ message: "ERROR: Bad Request" });
  }
};
export default connectDb(handler);
