import { findOne } from "../../../server/controllers/playlistController"
import { apiHandler } from "../../../server/helpers/api-handler";


export default apiHandler(handler)

async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(404).json({ message: 'url not found' })
    }

    const { id } = req.query

    const result = await findOne(id)
    res.status(200).json({ message: 'success', body: result })
}
