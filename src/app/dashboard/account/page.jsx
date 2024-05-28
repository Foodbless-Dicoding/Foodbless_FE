"use client";

import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import EditForm from "@/components/DashboardTemplate/Profile/EditForm";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";

const Page = () => {

    // Auth Check (WithToken, WithoutToken) 
    useCheckTokenAndRedirect("/dashboard/account", "login");

    // UseState -> user_id, role
    const [userId, setUserId] = useState("");
    const [role, setRole] = useState("");

    // UseState -> GET API for user details
    const [userDetails, setUserDetails] = useState([]);

    // Get user_id and role from Cookies using useEffect
    useEffect(() => {
        // Get user_id from Cookies
        const getCookiesuserId = Cookies.get("user_id");
        setUserId(getCookiesuserId);

        // Get role from Cookies
        const getCookiesRole = Cookies.get("role");
        setRole(getCookiesRole);
        
    },[])

    // Fetch API for user details using useEffect
    useEffect(() => {
        if (userId) {
            const fetchUserDetails = async () => {
                try {
                    const fetchUserDetails = await getFoodblessAPI(`user/${userId}`, "");
                    setUserDetails(fetchUserDetails.data);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
            fetchUserDetails();
        }else {
            console.error("User ID not found");
        }
    }, [userId])


    return (
        <>
            <Layout>
                <EditForm userDetails={userDetails} role= {role} />
            </Layout>
        </>
    );

}

export default Page;