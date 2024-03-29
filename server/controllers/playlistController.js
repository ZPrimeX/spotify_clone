import prisma from "../lib/prisma"

export const findAll = async () => {
    const data = await prisma.playlist.findMany()
    return data
}

export const findUnique = async (user) => {
    const playlists = await prisma.playlist.findMany({
        where: {
            owner_id: user.id
        }
    })
    return playlists
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

    return newPlaylist
}

export const findOne = async (playlist_id) => {
    try {
        const foundPlaylist = await prisma.playlist.findUnique({
            where: {
                id: playlist_id
            }
        })
        return foundPlaylist
    } catch (error) {
        return error
    }
}