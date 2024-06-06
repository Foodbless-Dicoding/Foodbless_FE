"use client";
import LocalExplore from "@/components/DashboardTemplate/customer/LocalExplore";
import { useState,useEffect,useCallback } from "react";
import Cookies from "js-cookie";

const ExploreSection = ({foodData}) => {

    // useState section
    const [filteredFoodData, setFilteredFoodData] = useState([]);
    const [custCityId, setCustCityId] = useState(0);
    const [systemDate, setSystemDate] = useState(new Date());

    // useEffect for systemDate
    useEffect(() => {
        const date = new Date();
        setSystemDate(date);
    }, []);

    //useEffect for custCityId & parse it to Integer
    useEffect(() => {
        const cityId = Cookies.get("city_id");
        setCustCityId(cityId);
    }, [])

    // useCallback for filtering foodData
    const filterFoodData = useCallback(() => {
        if (foodData && custCityId) {
            const filteredData = foodData.filter((food) => food.seller_city_id == custCityId);
            const filteredDataFromExpireDate = filteredData.filter((food) => new Date(food.expireDate) > systemDate);
            //Sorting from newest to oldest by ExpireDate
            filteredDataFromExpireDate.sort((a, b) => new Date(b.expireDate) - new Date(a.expireDate));
            setFilteredFoodData(filteredDataFromExpireDate);
        }
    }, [foodData, custCityId, systemDate]);

    // useEffect for filtering foodData
    useEffect(() => {
        if (foodData.length > 0) {
            filterFoodData();  
        }
    }, [foodData, filterFoodData]);

    return(
        <>
            <section className="flex flex-col px-8 py-4 w-full">
                <LocalExplore foodData={filteredFoodData}/>

            </section>
        </>
    );

}

export default ExploreSection;