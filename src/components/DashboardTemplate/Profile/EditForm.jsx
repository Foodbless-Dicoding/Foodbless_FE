"use client";

import { useState, useEffect } from "react";
import UpdateSeller from "@/components/DashboardTemplate/Profile/FormUpdate/UpdateSeller";
import UpdateCust from "@/components/DashboardTemplate/Profile/FormUpdate/UpdateCust";
import UpdateAdmin from "@/components/DashboardTemplate/Profile/FormUpdate/UpdateAdmin";
import { UserList } from "@phosphor-icons/react";
import Cookies from "js-cookie";
import { getFoodblessAPI } from "@/data/api-endpoint";

const EditForm = ({ userDetails, role }) => {
    const [loading, setLoading] = useState(true);
    const [jwtAuth, setJwtAuth] = useState("");
    const [city, setCity] = useState([]);
    const [province, setProvince] = useState([]);

    useEffect(() => {
        if (userDetails) {
            setLoading(false);
        }
    }, [userDetails]);

    useEffect(() => {
        const token = Cookies.get("token");
        setJwtAuth(token);
    }, [jwtAuth]);

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const fetchCity = await getFoodblessAPI("cityAll", "");
                setCity(fetchCity.cities);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchCity();
    },[]);

    useEffect(() => {
        const fetchProvincies = async () => {
            try {
                const fetchProvincies = await getFoodblessAPI("provinceAll", "");
                setProvince(fetchProvincies.provincies);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchProvincies();
    },[]);

    return (
        <>
            <section className="flex flex-col w-full rounded-lg px-4 py-6 bg-neutral-50">
                <div className="titleWrap flex flex-row gap-4 px-4 items-center">
                    <UserList weight="bold" size={24} />
                    <h2 className="text-lg font-semibold text-fbDark">Akun Saya</h2>
                </div>
                <hr className="border-neutral-300 mx-4 mt-2 border-[1.5px]" />

                {loading ? (
                    <div className="flex flex-row items-center justify-center p-4">
                        <div className="form_loader "></div>
                    </div>
                ) : (
                    <>
                        {role === "seller" && (
                            <UpdateSeller userDetails={userDetails} jwtAuth={jwtAuth} fetchCities={city} fetchProvincies={province} />
                        )}
                        {role === "customer" && (
                            <UpdateCust userDetails={userDetails} jwtAuth={jwtAuth} fetchCities={city} fetchProvincies={province} />
                        )}
                        {role === "admin" && (
                            <UpdateAdmin userDetails={userDetails} jwtAuth={jwtAuth} fetchCities={city} fetchProvincies={province} />
                        )}
                    </>
                )}
            </section>
        </>
    );
};

export default EditForm;
