"use client";

import Layout from "@/components/DashboardTemplate/Layout";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard", "/login");

    return (
        <>
        <Layout>
            
        </Layout>
        </>
    );
}

export default Page;
