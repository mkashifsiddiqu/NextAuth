import connectMongo from "@/lib/mongoDb";
import User from "@/models/user";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      console.log("CONNECTING TO MONGO");
      await connectMongo();
      const user = await User.create(req.body);
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  } else {
    res.json({ message:"user register endpoint" });
  }
}
