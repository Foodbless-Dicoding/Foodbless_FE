
"use client";
import CustReg from "@/components/Register/CustReg";
import { getFoodblessAPI } from "@/data/api-endpoint.js";
import { useEffect, useState } from "react";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";


const Page = () => {

    // Route Checker
    useCheckTokenAndRedirect("/dashboard", "/register-cust");

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
            <CustReg fetchProvince={provincies} fetchCity={cities}  />
        </div>
        </>
    );
}
export default Page;