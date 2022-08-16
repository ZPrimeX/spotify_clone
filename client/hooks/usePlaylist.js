import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const usePlaylist = () => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('idle')
    const router = useRouter()

    const handleCreate = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        try {
            const res = await axios.post("/api/playlist/new", {}, { headers: { Authorization: 'Bearer ' + token, } })
            if (res.data.message === 'success') {
                setStatus('success')
                router.push(`/playlist/${res.data.body.id}`)
            }
        } catch (error) {
            setStatus('error')
        }
    }
    return {
        handleCreate
    }
}