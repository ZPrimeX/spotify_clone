import { create } from "../../../server/controllers/playlistController"
import { getUser } from "../../../server/helpers/get-user"
import { apiHandler } from "../../../server/helpers/api-handler";

export default apiHandler(handler)

async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'url not found' })
    }
    const { user } = await getUser(req)
    const result = await create(req.body, user)
    res.status(201).json({ message: 'success', body: result })
}