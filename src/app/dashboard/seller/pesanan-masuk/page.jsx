"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";
import PesananMasukSection from "@/components/DashboardTemplate/seller/PesananMasukSection";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/seller/pesanan-masuk", "/login");
    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("seller", "/dashboard/seller/pesanan-masuk");

    // useState
    const [seller_id, setSellerId] = useState("");
    const [orders, setOrders] = useState([]);
    const [jwtToken, setJwtToken] = useState("");

    console.log(orders);

    // Get Seller ID & Token from Cookies
    useEffect(() => {
        const seller_id = Cookies.get("id_seller");
        const jwtToken = Cookies.get("token");
        setSellerId(seller_id);
        setJwtToken(jwtToken);
    }, []);

    // Get Orders by Seller ID
    const getOrders = useCallback(async () => {
        if (seller_id) {
            try {
                const response = await getFoodblessAPI("getAllOrders", "");
                const orderData = response.orders;
                // Filter Orders by Seller ID
                const filteredOrders = orderData.filter((order) => order.seller_id == seller_id);
                setOrders(filteredOrders);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }  
        }
    }, [seller_id]);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <>
            <Layout>
                <PesananMasukSection orderData={orders} jwtToken={jwtToken}  />
            </Layout>   
        </>
    );

}

export default Page;