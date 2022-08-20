import { Box, Typography, TextField, Button, CircularProgress, Link } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../client/context/UserContext";
import NextLink from 'next/link';

const Login = () => {
    const { email, setEmail, password, setPassword, handleLogin, status } = useContext(UserContext)
    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email address"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {status === 'loading' ? <CircularProgress sx={{ color: 'white' }} /> : "Log in"}
                    </Button>
                    <Link component={NextLink} href='/forgot-password'>
                        <Typography sx={{cursor: 'pointer'}}>Forgot password?</Typography>
                    </Link>
                    <hr />
                    <Box sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography component="h1" variant="h5">Don't have an account?</Typography>
                        <Link component={NextLink} href='/signup'>
                            <Button variant="contained" color={'whitebutton'} sx={{ mt: 3, borderRadius: '50px', color: 'black' }}>Sign up</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Login;