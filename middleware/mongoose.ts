import mongoose from "mongoose";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// skyrunner@mongoose
const connectDb = (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  mongoose.connect(`${process.env.MONGO_URI}`);
  return handler(req, res);
};
export default connectDb;
