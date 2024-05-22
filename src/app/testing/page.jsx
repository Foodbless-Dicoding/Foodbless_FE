/* eslint-disable @next/next/no-async-client-component */
"use client";

import { getFoodblessAPI } from "@/data/api-endpoint.js";
import { useState } from "react";

const Page = async () => {
    try {
        const province = await getFoodblessAPI("provinceAll", "");
        const fetchCity = await getFoodblessAPI("cityAll", "");

        const provincies = province.provincies; 
        const cities = fetchCity.cities;

        return (
            <>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Provinsi & Kota</label>
                        <select id="province_id" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm">
                            <option defaultValue="">-- Daftar Provinsi --</option>
                            {provincies.map((province) => (
                                <option key={province.id} value={province.id}>{province.name}</option>
                            ))}
                        </select>
                        <select id="city_id" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm">
                            <option defaultValue="">-- Daftar Kota Sesuai Provinsi --</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </select>
                    </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching province data: ", error);
        return <div>Error loading data</div>;
    }
}

export default Page;
