"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";
import CustHistoryTable from "@/components/DashboardTemplate/customer/CustHistoryTable";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/customer/riwayat-pesanan", "/login");
    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("customer", "/dashboard/customer/riwayat-pesanan");

    // useState
    const [customer_id, setCustomerId] = useState("");
    const [orders, setOrders] = useState([]);

    // Get Orders by Customer ID
    const getOrders = useCallback(async () => {
        if (customer_id) {
            try {
                const response = await getFoodblessAPI("getAllOrders", "");
                const orderData = response.orders;
                // Filter Orders by Customer ID
                const filteredOrders = orderData.filter((order) => order.customer_id == customer_id);
                setOrders(filteredOrders);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }  
        }
    }, [customer_id]);

    useEffect(() => {
        const customer_id = Cookies.get("id_cust");
        setCustomerId(customer_id);
        getOrders();
    }, [getOrders])


    return (
        <>
            <Layout>
                <CustHistoryTable historyData={orders} />          
            </Layout>
        </>
    );

}

export default Page;