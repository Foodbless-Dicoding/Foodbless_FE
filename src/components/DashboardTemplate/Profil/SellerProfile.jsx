/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useCallback } from "react";
import CommentForm from "@/components/DashboardTemplate/Profil/CommentForm";
import { ChatCircleDots } from "@phosphor-icons/react";
import CommentCard from "@/components/DashboardTemplate/Profil/CommentCard";
import Cookies from "js-cookie";

const SellerProfile = ({sellerDetail, cities, provincies}) => {

    const [sellerCity, setSellerCity] = useState("");
    const [sellerProvince, setSellerProvince] = useState("");
    const [role, setRole] = useState(""); 

    // take role from cookies
    useEffect(() => {
        const role = Cookies.get("role");
        setRole(role);
    }, [])
    
    const filteringCityProvince = useCallback(() => {
        if (sellerDetail && cities.length && provincies.length) {
            const city = cities.find((city) => city.id === sellerDetail.city_id);
            const province = provincies.find((province) => province.id === sellerDetail.city_province_id);
            
            setSellerCity(city ? city.name : "Unknown");
            setSellerProvince(province ? province.name : "Unknown");
        }
    }, [sellerDetail, cities, provincies]);


    useEffect(() => {
        filteringCityProvince();  
    },[filteringCityProvince])

    return (
        <>
            <div className="flex flex-col flex-wrap border-[1.5px] border-gray-200 rounded-lg w-full min-h-[150px]">
                <div className="flex flex-col md:flex-row flex-wrap w-full items">
                    <div className="flex flex-col md:flex-row flex-wrap md:w-1/4 items-center justify-center">
                        <img className="md:w-[120px] w-full md:h-[120px] h-[150px] object-cover rounded-t-lg md:rounded-full" src={`${sellerDetail.photo}`} alt="Profil Seller" />
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap md:w-3/4 md:p-4">
                        <div className="flex flex-col flex-wrap p-4">
                            <h1 className="font-bold text-primaryGreen text-2xl">{sellerDetail.name}</h1>
                            <h3 className="font-semibold text-fbDark text-md">{sellerCity}, {sellerProvince}</h3>
                            <h3 className="font-regular text-gray-500 text-sm"><span className="font-semibold">Email: </span>{sellerDetail.email}</h3>
                            <a target="_blank" className="my-2" aria-label="Chat on WhatsApp" href={`https://wa.me/${sellerDetail.nomorWA}`}> <img alt="Chat on WhatsApp" className="h-5 w-auto" src="/Assets/WhatsAppButtonGreenMedium.png" /></a >
                        </div>
                    </div>
                </div>
            </div>
            {/* Detail Info Section */}
            <div className="flex flex-col flex-wrap mt-2 w-full min-h-[150px] py-2 px-4">
                <h3 className="font-bold text-lg text-fbDark py-4">Deskripsi {sellerDetail.name}</h3>
                <p className="font-regular text-sm text-gray-500"><span className="font-semibold">Alamat: </span>{sellerDetail.address}</p>
                <p className="font-regular text-sm text-gray-500"><span className="font-semibold">Nomor WA: </span>{sellerDetail.nomorWA}</p>
                <p className="font-regular text-sm text-gray-500 py-2">{sellerDetail.desc}</p>
            </div>
            {/* Comments Section */}
            <div className="flex flex-col flex-wrap mt-2 w-full min-h-[250px] py-2 px-4">
                <h3 className="font-bold text-lg text-fbDark py-4">Komentar</h3>

                {/* Make it only visible when the role is customer */}
                {role === "customer" && (
                    <>
                        <CommentForm sellerDetail={sellerDetail} />
                    </>
                )}



                {/* Comments View */}
                <section className="flex flex-col flex-wrap my-2">
                    <button type="button" className="hs-collapse-toggle py-2 inline-flex w-[150px] items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent text-fbDark disabled:opacity-50 disabled:pointer-events-none" id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">
                        Lihat Komentar
                        <ChatCircleDots size={20} />
                    </button>
                    <div id="hs-basic-collapse-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                        <div className="mt-5">
                            <CommentCard id_seller={sellerDetail.id_seller} />
                        </div>
                    </div>
                </section>
            </div>
    
        </>
    );

}

export default SellerProfile;