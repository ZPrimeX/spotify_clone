// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { findAll } from "../../server/controllers/playlistController"

export default function handler(req, res) {
  if (req.method === 'GET') {
    const result = findAll()
    res.status(200).json({ message: 'success', body: result })
  }
}
