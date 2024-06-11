"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useCallback } from "react";
import { getFoodblessAPI } from "@/data/api-endpoint";
import JualBeliTable from "@/components/DashboardTemplate/admin/JualBeliTable";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/admin/riwayat-jual-beli", "/login");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("admin", "/dashboard/admin/riwayat-jual-beli");

    // useState
    const [orders, setOrders] = useState([]);

    // Get All Orders
    const getOrdersAll = useCallback(async() => {
        try {
            const response = await getFoodblessAPI("getAllOrders", "");
            const orderData = response.orders;
            setOrders(orderData);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } 
    },[])

    // useEffect
    useEffect(() => {
        getOrdersAll();
    }, [getOrdersAll])

    return (
        <>
            <Layout>
                <JualBeliTable orders={orders} />
            </Layout>
        
        </>
    );
}

export default Page;  