"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Page = () => {
    const [token, setToken] = useState("");
    const [user_id, setUser_id] = useState("");

    useEffect(() => {
        const tokenFromCookie = Cookies.get("token");
        const user_idFromCookie = Cookies.get("user_id");
        if (tokenFromCookie && user_idFromCookie) {
            setToken(tokenFromCookie);
            setUser_id(user_idFromCookie);
        }
    }, []); 

    return (
        <>
            <h1>DASHBOARD</h1>
            <h2>Token: {token}</h2>
            <h2>User ID: {user_id}</h2>
        </>
    );
}

export default Page;
