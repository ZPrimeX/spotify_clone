import React, { useContext } from "react";
import { Box, Typography, TextField, Button} from "@mui/material";
import { UserContext } from "../client/context/UserContext";
import {req} from '../client/core/utils/Axios'
import {useSnackbar} from 'notistack'

const ForgotPassword = () => {
    const { email, setEmail } = useContext(UserContext)
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await req.post('/user/forgot-password', {email})
        if(res.data.message === 'success'){
            enqueueSnackbar('All good! Check your email inbox.', {variant: 'success'})
        }
        } catch (error) {
            enqueueSnackbar('Something went wrong, try again later!', {variant: 'error'})
        }

    }
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
                    Enter your email
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Send Instructions</Button>
                </Box>
            </Box>
        </>
    );
};

export default ForgotPassword;