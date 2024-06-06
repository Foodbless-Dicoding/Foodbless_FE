"use client";

import { ListMagnifyingGlass } from "@phosphor-icons/react";
import NoDataCustCard from "@/components/DashboardTemplate/customer/noDataCustCard";
import CustomerCard from "@/components/DashboardTemplate/customer/customerCard";
import { useState, useEffect, useCallback } from "react";

const LocalExplore = ({foodData}) => {

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center text-primaryGreen gap-2">
                    <ListMagnifyingGlass size={28} weight="bold" />
                    <h2 className="font-bold text-lg ">Makanan Sekitarmu ({foodData.length})</h2>
                </div>
                <div className="grid gap-4 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
                    {foodData.length === 0 ? (
                        <>
                            <NoDataCustCard />            
                        </>
                    ) : (
                        <>
                            {foodData.map((food) => (
                                <CustomerCard key={food.id} foodData={food} />
                            ))}    
                        </>
                    )}

                </div>
            </div>
        
        </>
    );

}

export default LocalExplore;