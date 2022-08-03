import { validateSignUp } from "../../../server/controllers/userController";
import { apiHandler } from "../../../server/helpers/api-handler";


export default apiHandler(handler)

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'not found' })
    }
    const result = await validateSignUp(req.body)

    if (result.message === 'error') {
        return res.status(200).json({ message: 'error', description: result.description })
    }


    res.status(201).json({ message: 'success' })
}