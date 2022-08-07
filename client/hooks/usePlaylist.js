import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const usePlaylist = () => {
    const [title, setTitle] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerId, setOwnerId] = useState('')
    const [status, setStatus] = useState('idle')
    const [playlist, setPlaylist] = useState({})
    const router = useRouter()

    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/playlist/new", { title, ownerName, ownerId })
            if (res.data.message === 'success') {
                setPlaylist(res.data.body)
                setStatus('success')
                router.push('/')
            }
        } catch (error) {

        }
    }
}