import { apiHandler } from "../../../server/helpers/api-handler";
import prisma from "../../../server/lib/prisma";
import jwt from 'jsonwebtoken'
import getConfig from 'next/config'


const { serverRuntimeConfig } = getConfig()

export default apiHandler(handler)

async function handler(req, res) {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, serverRuntimeConfig.secret)
    switch (req.method) {
        case 'GET':
            const foundUser = await prisma.user.findUnique({
                where: {
                    id: decoded.id,
                },
            })

            if (!foundUser) {
                return res.status(401).json({ message: 'error', description: 'user not found' })
            }

            return res.status(200).json({ message: 'success', body: { ...foundUser, password: null } })
        case 'PATCH':
            const updatedUser = await prisma.user.update({
                where: { id: decoded.id },
                data: { ...req.body }
            })

            return res.status(201).json({ message: 'success', body: { ...updatedUser, password: null } })

        default:
            return res.status(404).json({ message: 'not found' })
    }
}