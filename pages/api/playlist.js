// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { create, findAll } from "../../server/controllers/playlistController"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const result = await findAll()
    res.status(200).json({ message: 'success', body: result })
  }
  if (req.method === 'POST') {
    const result = await create(rew.body)
    res.status(201).json({ message: 'success', body: result })
  }
}
