"use client";

import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import SellingSection from "@/components/DashboardTemplate/seller/SellingSection";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";

const Page = () => {
    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/seller/penjualan", "");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("seller", "/dashboard/seller/penjualan");

    // State for userDetails
    const [userId, setUserId] = useState("");
    const [userDetails, setUserDetails] = useState(null);

    // State for seller_id & seller_city_id
    const [sellerId, setSellerId] = useState(0);
    const [sellerCityId, setSellerCityId] = useState(0);

    // useState for Food Data
    const [foodData, setFoodData] = useState([]);
    
    // useEffect - for getting userId from Cookies
    useEffect(() => {
        const getCookiesUserId = Cookies.get("user_id");
        if (getCookiesUserId) {
            setUserId(getCookiesUserId);
        } else {
            console.error("User ID not found in cookies");
        }
    }, []);

    // Fetch API for user details using useEffect
    useEffect(() => {
        const fetchUserDetails = async () => {
            if (userId) {
                try {
                    const response = await getFoodblessAPI(`user/${userId}`, "");
                    if (response.data) {
                        setUserDetails(response.data);
                    } else {
                        console.error("No data received from API");
                    }
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
        };
        fetchUserDetails();
    }, [userId]);

    // useEffect for setting sellerId and sellerCityId
    useEffect(() => {
        if (userDetails) {
            setSellerId(userDetails.id_seller);
            setSellerCityId(userDetails.city_id);
        }
    }, [userDetails]);

    // useEffect for Food Data
    useEffect(() => {
        const fetchFoodData = async() => {
            try {
                const response = await getFoodblessAPI("getAllFoods", "");
                setFoodData(response.foods);

            } catch (error) {
                console.error("Error fetching data: ", error);  
            }
        }
        fetchFoodData();
    },[])

    return (
        <Layout>
            <SellingSection sellerId={sellerId} sellerCityId={sellerCityId} foodData={foodData} />
        </Layout>
    );
};

export default Page;
