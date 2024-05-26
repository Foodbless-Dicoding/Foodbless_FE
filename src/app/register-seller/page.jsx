"use client";
import { getFoodblessAPI } from "@/data/api-endpoint.js";
import { useEffect, useState } from "react";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import SellerReg from "@/components/Register/SellerReg";

const Page = () => {
    // Route Checker
    useCheckTokenAndRedirect("/dashboard", "/register-seller");

    // Fetch API
    const [provincies, setProvincies] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchProvince = await getFoodblessAPI("provinceAll", "");
                const fetchCity = await getFoodblessAPI("cityAll", "");

                setProvincies(fetchProvince.provincies);
                setCities(fetchCity.cities);

            } catch (error) {
                console.error("Error fetching data: ", error);        
            }
        }
        fetchData();
    });

    return (
        <>
            <div className="register_bg min-h-screen flex items-center justify-center">
                <SellerReg fetchProvince={provincies} fetchCity={cities} />
            </div>
        </>
    );

}
export default Page;