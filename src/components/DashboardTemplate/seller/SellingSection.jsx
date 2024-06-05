"use client";

import { Storefront } from "@phosphor-icons/react";
import AddFood from "@/components/DashboardTemplate/seller/AddFood";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SellerCard from "@/components/DashboardTemplate/seller/SellerCard";
import NoDataCard from "@/components/DashboardTemplate/seller/noData";

const SellingSection = ({ sellerId, sellerCityId, foodData }) => {
    /* 
        UseState Management
    */
    const [jwtToken, setJwtToken] = useState("");
    const [filteredFoodData, setFilteredFoodData] = useState([]);

    //useEffect for jwtToken
    useEffect(() => {
        const token = Cookies.get("token");
        setJwtToken(token);
    }, []); 

    // useEffect for filtering foodData
    useEffect(() => {
        if (foodData) {
            const filteredData = foodData.filter((food) => food.seller_id === sellerId);
            // Sort by expireDate in descending order (newest to oldest)
            filteredData.sort((a, b) => new Date(b.expireDate) - new Date(a.expireDate));
            setFilteredFoodData(filteredData);
            setFilteredFoodData(filteredData);
        }
    }, [foodData, sellerId]);

    return (
        <>
            <section className="flex flex-col px-8 py-4 w-full">
                <div className="flex flex-row items-center justify-between">
                    <div className="title_wrap flex flex-row text-secondaryGreen font-bold text-md md:text-lg lg:text-xl items-center gap-2">
                        <Storefront weight="bold" size={30} />
                        <h2>Penjualan Saya ({filteredFoodData.length})</h2>
                    </div>
                    <div className="button_wrap flex flex-row">
                        <AddFood jwtToken={jwtToken} sellerId={sellerId} sellerCityId={sellerCityId} />
                    </div>
                </div>
                {/* Penjualan Card Section */}
                <div className="grid gap-4 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
                    {filteredFoodData.length === 0 ? (
                        <NoDataCard />
                    ) : (
                        filteredFoodData.map((food) => (
                            <SellerCard key={food.id} foodData={food} />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}

export default SellingSection;
