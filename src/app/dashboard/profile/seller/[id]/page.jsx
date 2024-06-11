"use client";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import Layout from "@/components/DashboardTemplate/Layout";
import { useState, useEffect, useCallback } from "react";
import { getFoodblessAPI, getSellerDetail } from "@/data/api-endpoint";
import SellerProfile from "@/components/DashboardTemplate/Profil/SellerProfile";


const Page = ({params: {id}}) => {

    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect(`/dashboard/profile/seller/${id}`, "/login");

    // useState
    const [sellerData,setSellerData] = useState([]);
    const [cities, setCities] = useState([]);
    const [provincies,setProvincies] = useState([]);
    console.log(sellerData);

    // Fetch Seller Data
    const fetchSellerData = useCallback(async() => {
        if (id) {
            try {
                const response = await getSellerDetail(id);
                if (response.seller) {
                    setSellerData(response.seller);
                } else {
                    console.error("No data received from API");
                }
             
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

    },[id]);

    const fetchCities = useCallback(async() => {
        try {
            const response = await getFoodblessAPI("cityAll", "");
            setCities(response.cities);       
        } catch (error) {
            console.error("Error fetching data: ", error);
        }  
    },[]);

    const fetchProvincies = useCallback(async() => {
        try {
            const response = await getFoodblessAPI("provinceAll", "");
            setProvincies(response.provincies);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    },[])

    useEffect(() => {
        fetchSellerData(); 
    },[fetchSellerData])

    // useEffect for Cities and Provincies
    useEffect(() => {
        fetchCities();
        fetchProvincies();
    },[fetchCities,fetchProvincies]);

    return (
        <>
            <Layout>
                <section className="flex flex-col px-6 py-4 flex-wrap">
                    <div className="flex flex-col min-h-[500px] w-full rounded-lg p-4 bg-neutral-50">
                        <SellerProfile sellerDetail={sellerData} cities={cities} provincies={provincies} />
                    </div>
                </section>
            </Layout>
        </>
    );

}

export default Page;