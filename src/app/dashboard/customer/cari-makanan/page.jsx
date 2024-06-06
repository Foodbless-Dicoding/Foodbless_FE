"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import ExploreSection from "@/components/DashboardTemplate/customer/ExploreSection";
import { getFoodblessAPI } from "@/data/api-endpoint";
import { useState, useEffect, useCallback } from "react";


const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/customer/cari-makanan", "/login");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("customer", "/dashboard/customer/cari-makanan");

    // useState for API
    const [foodData, setFoodData] = useState([]);

    // useCallBack for fetching data
    const fetchFoodData = useCallback(async() => {
        try {
            const response = await getFoodblessAPI("foods", "");
            setFoodData(response.foods);      
        } catch (error) {
            console.error("Error fetching data: ", error);       
        }
    },[]);

    // useEffect for fetching data
    useEffect(() => {
        fetchFoodData();
    }, [fetchFoodData]);

    return (
        <>
            <Layout>
                <ExploreSection foodData={foodData} />
            </Layout>
        </>
    );

}
export default Page;