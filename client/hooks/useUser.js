import { useState } from "react";
import axios from "axios";


export const useUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/user/sign-up", { username, email, password });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/user/login", { email, password });
    };

    return {
        handleLogin,
        handleSignUp,
        username,
        email,
        password,
        setUsername,
        setEmail,
        setPassword
    }


}