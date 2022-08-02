import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/user/sign-up", { username, email, password });

        console.log(res.data);
    };
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

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Signup;