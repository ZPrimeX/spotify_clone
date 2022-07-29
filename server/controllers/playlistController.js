import prisma from "../lib/prisma"

export const findAll = async () => {
    const data = await prisma.playlist.findMany()
    return data
}

export const create = async () => {
    const newPlaylist = await prisma.playlist.create({
        data: data
    })
    return newPlaylist
}