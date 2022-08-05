import { login } from "../../../server/controllers/userController";
import { apiHandler } from "../../../server/helpers/api-handler";


export default apiHandler(handler)

async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'url not found' })
    }
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({ message: 'no data sent' })
    }
    if (!req.body.email) {
        res.status(400).json({ message: 'no email' })
    }
    if (!req.body.password) {
        res.status(400).json({ message: 'no password' })
    }

    const result = await login(req.body)

    if (result.message === 'error') {
        res.status(401).json({ message: result.data })
    }


    res.status(201).json({ message: 'success', body: result.data })
}