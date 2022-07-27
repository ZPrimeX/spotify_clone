import prisma from "../lib/prisma"

export const findAll = async () => {
    const data = await prisma.playlist.findMany()
    return data
}