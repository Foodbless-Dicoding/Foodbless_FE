"use client";

import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect } from "react";
import {getFoodDataById} from "@/data/api-endpoint";


const Page = ({params: {id}}) => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect(`/dashboard/seller/penjualan/${id}`, "");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("seller", `/dashboard/seller/penjualan/${id}`);

    // useState for Food Details
    const [foodDetails, setFoodDetails] = useState({});

    console.log("ID: ", id);

    // useEffect for getting food details
    useEffect(() => {
        const fetchFoodDetails = async() => {
            if (id) {
                try {
                    const response = await getFoodDataById(id);
                    if (response.food) {
                        setFoodDetails(response.food);
                    } else {
                        console.error("No data received from API");
                    }  
                } catch (error) {
                    console.error("Error fetching data: ", error);                    
                }
            }
        }
        fetchFoodDetails();
    })


    return (
        <>
            <Layout>
                <h1>Food Detail dengan ID: {foodDetails.id}</h1>
            </Layout>
        </>
    )
}

export default Page;