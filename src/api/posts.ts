// pages/api/posts.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Simulate fetching posts from a database
    const posts = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ];
    res.status(200).json(posts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
