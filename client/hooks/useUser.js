import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export const useUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false)
    const [status, setStatus] = useState('idle')
    const [user, setUser] = useState()
    const [token, setToken] = useState("")
    const router = useRouter()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        setToken(localStorage.getItem('token') || undefined)
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            setStatus('loading')
            const res = await axios.post('/api/user/validate', { username, email, password })

            if (res.data.message === 'success') {
                setUser(res.data.body)
                localStorage.setItem('user', JSON.stringify(res.data.body))
                localStorage.setItem('token', res.data.body.token)
                setIsAuth(true)
                setStatus('success')
                setToken(res.data.body.token)
                router.push('/profile')
            }
        } catch (error) {
            setIsAuth(false)
            setStatus('error')
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            setStatus('loading')
            const res = await axios.post("/api/user/sign-up", { username, email, password });

            if (res.data.message === 'success') {
                setUser(res.data.body)
                localStorage.setItem('user', JSON.stringify(res.data.body))
                localStorage.setItem('token', res.data.body.token)
                setIsAuth(true)
                setStatus('success')
                setToken(res.data.body.token)
                router.push('/')
            }

        } catch (error) {
            setIsAuth(false)
            setStatus('error')
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setStatus('loading')
            const res = await axios.post("/api/user/login", { email, password });

            if (res.data.message === 'success') {
                setUser(res.data.body)
                localStorage.setItem('user', JSON.stringify(res.data.body))
                localStorage.setItem('token', res.data.body.token)
                setIsAuth(true)
                setStatus('success')
                setToken(res.data.body.token)
                router.push('/')
            }
        } catch (error) {
            setIsAuth(false)
            setStatus('error')
        }
    };

    return {
        handleLogin,
        handleSignUp,
        username,
        email,
        password,
        setUsername,
        setEmail,
        setPassword,
        isAuth,
        setIsAuth,
        status,
        setStatus,
        user,
        token
    }


}