// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findAll } from "../../../server/controllers/playlistController"
import { apiHandler } from "../../../server/helpers/api-handler";


export default apiHandler(handler)

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).json({ message: 'url not found' })
  }
  const result = await findAll()
  res.status(200).json({ message: 'success', body: result })
}
