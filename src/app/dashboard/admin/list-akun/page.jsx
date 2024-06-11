"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import useCheckRoleAndRedirect from "@/lib/auth/useCheckRoleAndRedirect";
import { useState, useEffect, useCallback } from "react";
import { getFoodblessAPI } from "@/data/api-endpoint";
import ListCustomerTable from "@/components/DashboardTemplate/admin/ListCustomerTable";
import ListSellerTable from "@/components/DashboardTemplate/admin/ListSellerTable";

const Page = () => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect("/dashboard/admin/list-akun", "/login");

    // Auth Role Check (decidedRoles, urlWithRole)
    useCheckRoleAndRedirect("admin", "/dashboard/admin/list-akun");

    // useState
    const [customer, setCustomer] = useState([]);
    const [seller, setSeller] = useState([]);

    // Get All Seller & Customer
    const getAllUsers = useCallback(async() => {
        try {
            const resCustomer = await getFoodblessAPI("getAllCustomers", "");
            const resSeller = await getFoodblessAPI("getAllSellers", "");
            setCustomer(resCustomer.customers);
            setSeller(resSeller.seller);   
        } catch (error) {
            console.error("Error fetching data: ", error);
        }

    },[])

    // useEffect
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers])

    return (
        <>
            <Layout>
                <section className="px-6 py-4">
                    <div className="p-4 rounded-lg bg-neutral-50">
                        <div className="border-b border-gray-200">
                            <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primaryGreen focus:outline-none focus:text-primaryGreen disabled:opacity-50 disabled:pointer-events-none active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                Akun Seller
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primaryGreen focus:outline-none focus:text-primaryGreen disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                Akun Customer
                                </button>
                            </nav>
                        </div>
                        <div className="mt-3">
                            <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                                <ListSellerTable data={seller} />
                            </div>
                            <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                                <ListCustomerTable data={customer} />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
}

export default Page;