"use client";

import { Storefront } from "@phosphor-icons/react";
import AddFood from "@/components/DashboardTemplate/seller/AddFood";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const SellingSection = ({ sellerId, sellerCityId }) => {

    /* 
        UseState Management
    */
   const [jwtToken, setJwtToken] = useState("");

    //useEffect for jwtToken
    useEffect(() => {
        const token = Cookies.get("token");
        setJwtToken(token);
    }, [jwtToken]);

    return (
        <>
            <section className="flex flex-col px-8 py-4 w-full">
                <div className="flex flex-row justify-between">
                    <div className="title_wrap flex text-secondaryGreen font-bold text-md md:text-xl items-center gap-2">
                        <Storefront weight="bold" size={30} />
                        <h2>Penjualan Barang Saya</h2>
                    </div>
                    <div className="button_wrap flex flex-row ">
                        <AddFood jwtToken={jwtToken} sellerId={sellerId} sellerCityId={sellerCityId}  />
                    </div>
                </div>
            </section>
        </>
    );

}

export default SellingSection;
