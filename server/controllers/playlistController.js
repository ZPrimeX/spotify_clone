import prisma from "../lib/prisma"

export const findAll = async () => {
    const data = await prisma.playlist.findMany()
    return data
}

export const create = async (data, user) => {
    const playlistDefaultTitle = user.Playlist ? `My Playlist #${user.Playlist.length + 1}` : "My Playlist #1"

    const newPlaylist = await prisma.playlist.create({
        data: {
            title: playlistDefaultTitle,
            owner_name: user.username,
            owner_id: user.id
        }
    })

    return 'done'
}