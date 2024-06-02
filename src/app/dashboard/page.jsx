"use client";

import Layout from "@/components/DashboardTemplate/Layout";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import BerandaHeader from "@/components/DashboardTemplate/BerandaHeader";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard", "/login");

    return (
        <>
        <Layout>
            <BerandaHeader />
        </Layout>
        </>
    );
}

export default Page;
