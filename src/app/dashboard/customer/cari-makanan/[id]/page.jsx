"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useMemo } from "react";
import {getFoodDataById} from "@/data/api-endpoint";
import FoodDetail from "@/components/DashboardTemplate/customer/FoodDetail";



const Page = ({params: {id}}) => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect(`/dashboard/customer/cari-makanan/${id}`, "/login");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("customer", `/dashboard/customer/cari-makanan/${id}`);

    // useState for Food Details
    const [foodDetails, setFoodDetails] = useState({});
    console.log(foodDetails);

    
    // useMemo for getting food details - to prevent infinite loop
    const memoizedFoodDetails = useMemo(() => {
        if (id) {
            return getFoodDataById(id);
        }
        return null;
    },[id]);

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
    }, [memoizedFoodDetails, id])


    return (
        <>
            <Layout>
                <FoodDetail foodData={foodDetails} />
            </Layout>
        
        </>
    );
}

export default Page;