import { signUp } from "../../../server/controllers/userController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(404).json({ message: 'url not found' })
    }
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({ message: 'no data sent' })
    }
    if (!req.body.username) {
        res.status(400).json({ message: 'no username' })
    }
    if (!req.body.username) {
        res.status(400).json({ message: 'no email' })
    }
    if (!req.body.username) {
        res.status(400).json({ message: 'no password' })
    }
    const result = await signUp(req.body)
    if (result.id) {
        res.status(201).json({ message: 'success', body: result })
    }
}