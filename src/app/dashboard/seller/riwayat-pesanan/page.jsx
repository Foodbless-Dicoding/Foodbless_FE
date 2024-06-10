"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";
import SellerHistoryTable from "@/components/DashboardTemplate/seller/SellerHistoryTable";


const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/seller/riwayat-pesanan", "/login");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("seller", "/dashboard/seller/riwayat-pesanan");

    // useState
    const [seller_id, setSellerId] = useState("");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const seller_id = Cookies.get("id_seller");
        setSellerId(seller_id);
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
                <SellerHistoryTable historyData={orders} />
            </Layout>
        
        </>
    );

}

export default Page;