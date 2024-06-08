"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";
import PesananMasukSection from "@/components/DashboardTemplate/seller/PesananMasukSection";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/seller/pesanan-masuk", "/login");
    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("seller", "/dashboard/seller/pesanan-masuk");

    return (
        <>
            <Layout>
                <PesananMasukSection />
            </Layout>   
        </>
    );

}

export default Page;