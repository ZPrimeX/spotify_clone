import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const res = await axios.patch(
        "/api/user/reset-password",
        { password },
        {
          headers: { Authorization: `Bearer ${router.query.token}` },
        }
      );
      alert(JSON.stringify(res.data));
    }
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
          Change your password
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {status === "loading" ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Save"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ResetPassword;
