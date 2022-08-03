import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../client/context/UserContext";


const Signup = () => {
    const { handleSignUp, username, setUsername, email, setEmail, password, setPassword, status } = useContext(UserContext)

    const [isUsernameTaken, setIsUsernameTaken] = useState(false)
    const [passwordShort, setPasswordShort] = useState(false)

    const checkUsername = async () => {
        if (username.length > 0) {
            const { data } = await axios.post('/api/user/validate', { username })

            if (data.message === 'error') {
                setIsUsernameTaken(true)
            } else {
                setIsUsernameTaken(false)
            }
        }
    }
    useEffect(() => {
        checkUsername()
    }, [username])

    useEffect(() => {
        if (password.length > 0 && password.length < 6) {
            setPasswordShort(true)
        } else {
            setPasswordShort(false)
        }
    }, [password])
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: '80px auto',
                    width: '400px',
                    textAlign: 'center'
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign up with your email address
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={handleSignUp}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        type="text"
                        id="name"
                        autoComplete="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {isUsernameTaken ? <Alert severity="error">This username is already taken</Alert> : ""}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Create a password"
                        type="password"
                        id="password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordShort ? <Alert severity="error">Password has to be at least 6 characters</Alert> : ""}

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={isUsernameTaken}>
                        {status === 'loading' ? <CircularProgress sx={{ color: 'white' }} /> : "Sign Up"}
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Signup;