import React, { createContext } from 'react'
import { useUser } from '../hooks/useUser'

export const UserContext = createContext({ username: '', email: '', password: '', isAuth: false, status: 'idle' })
const UserProvider = (props) => {
    const { username, handleSignUp, handleLogin, email, password, setUsername, setEmail, setPassword, token, user, isAuth, status } = useUser()
    return (
        <UserContext.Provider value={{ username, handleLogin, handleSignUp, email, password, setEmail, setUsername, setPassword, token, user, status, isAuth }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider