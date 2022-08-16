import { findUnique } from "../../../server/controllers/playlistController"
import { apiHandler } from "../../../server/helpers/api-handler";
import { getUser } from "../../../server/helpers/get-user";

export default apiHandler(handler)

async function handler(req, res) {
    const { user } = await getUser(req);
    if (req.method !== 'GET') {
        res.status(404).json({ message: 'url not found' })
    }
    const result = await findUnique(user)
    res.status(200).json({ message: 'success', body: result })
}