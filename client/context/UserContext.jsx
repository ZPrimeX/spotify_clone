import React, { createContext, useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import { Box } from '@mui/material'


export const UserContext = createContext({ username: '', email: '', password: '', avatar: '', isAuth: false, status: 'idle' })
const UserProvider = (props) => {
    const { handleUpdate, avatar, setAvatar, username, handleSignUp, handleLogin, email, password, setUsername, setEmail, setPassword, handleLogOut, token, user, isAuth, status, fetchUserData } = useUser()

    useEffect(() => {
        // if we lost user state
        const token = localStorage.getItem('token')
        if (Object.keys(user).length === 0 && token) {
            fetchUserData(token)
        }
    }, [])

    return (
        <UserContext.Provider value={{ handleUpdate, avatar, setAvatar, username, handleLogin, handleSignUp, email, password, setEmail, setUsername, setPassword, token, user, status, isAuth }}>
            {status === 'loading' ? <Box /> : props.children}
        </UserContext.Provider>
    )
}

export default UserProvider