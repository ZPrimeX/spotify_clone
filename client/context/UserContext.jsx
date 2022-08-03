import React, { createContext } from 'react'
import { useUser } from '../hooks/useUser'

export const UserContext = createContext({ username: '', email: '', password: '' })
const UserProvider = (props) => {
    const { username, handleSignUp, handleLogin, email, password, setUsername, setEmail, setPassword } = useUser()
    return (
        <UserContext.Provider value={{ username, handleLogin, handleSignUp, email, password, setEmail, setUsername, setPassword }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider