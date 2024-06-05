/* eslint-disable @next/next/no-img-element */

"use client";
import { useState, useEffect } from "react";
import { getFoodblessAPI } from "@/data/api-endpoint";
import { ArrowLeft } from "@phosphor-icons/react";
import moment from "moment";

const FoodDetailSeller = ({ foodData }) => {

    // useState for Seller Details
    const [sellerId, setSellerId] = useState("");
    const [sellerDetails, setSellerDetails] = useState([]);
    const [sellerCity, setSellerCity] = useState("");
    const [sellerProvince, setSellerProvince] = useState("");

    // use MomentJS to format date
    const formattedExpireDate = moment(foodData.expireDate).locale('id').format('LL LT');
    // useState for System Data
    const [systemDate, setSystemDate] = useState(new Date());

    // useEffect for systemDate
    useEffect(() => {
        const date = new Date();
        setSystemDate(date);
    }, []);

    //useEffect for sellerId
    useEffect(() => {
        if (foodData.seller_id) {
            setSellerId(foodData.seller_id);
        }
    }, [foodData.seller_id]);

    // useEffect for Seller Details
    useEffect(() => {
        const fetchSellerDetails = async () => {
            if (sellerId) {
                try {
                    const response = await getFoodblessAPI("getAllSellers", "");
                    const sellerData = response.seller; // Change it to sellers later!
                    const filteredSellerData = sellerData.filter((seller) => seller.id_seller === sellerId);
                    if (filteredSellerData.length > 0) {
                        setSellerDetails(filteredSellerData[0]);
                    } else {
                        setSellerDetails(null);
                    }
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
        };
        fetchSellerDetails();
    }, [sellerId]);

    // useEffect for Seller Province and City
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchProvince = await getFoodblessAPI("provinceAll", "");
                const fetchCity = await getFoodblessAPI("cityAll", "");
                const provinciesData = fetchProvince.provincies;
                const citiesData = fetchCity.cities;

                const filteredProvince = provinciesData.filter((province) => province.id === sellerDetails.city_province_id);
                const filteredCity = citiesData.filter((city) => city.id === sellerDetails.city_id);

                setSellerProvince(filteredProvince[0].name);
                setSellerCity(filteredCity[0].name);

            } catch (error) {
                console.error("Error fetching data: ", error);        
            }
        }
        fetchData();
    });

    // change to IDR format
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(foodData.price ? parseFloat(foodData.price) : 0);

    return (
        <>
            <section className="flex flex-col w-full min-h-[400px] rounded-lg bg-fbWhite ">
                    <a className="hidden md:flex flex-row gap-4 pl-6 relative top-4" href="/dashboard/seller/penjualan">
                        <ArrowLeft size={24} />
                    </a>
                <div className="flex flex-col md:flex-row md:py-6 md:pt-8 md:px-6">
                    <div className="md:w-1/3 w-full">
                        <img
                            className="md:h-[300px] h-[200px] w-full md:w-[300px] md:rounded-md md:shadow-md rounded-t-lg object-cover"
                            src={`${foodData.photo}`}
                            alt="Food Photo"
                        />
                        <a className="hidden md:flex md:flex-col" href={`/dashboard/seller/penjualan/edit/${foodData.id}`}>
                            <button className="py-2 justify-center mt-4 px-6 w-full inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primaryGreen hover:bg-secondaryGreen text-white  disabled:opacity-50 disabled:pointer-events-none" 
                            type="button">
                                <p>Edit Data</p>
                            </button>
                        </a>
                    </div>
                    <div className="md:2/3 w-full px-6 py-4 md:px-8 md:py-2">
                        <h1 className="text-primaryGreen font-bold text-2xl md:text-3xl">
                            {foodData.name}
                        </h1>
                        <ul className="flex flex-row gap-4 py-2 text-sm">
                            <li className="px-4 py-[2px] bg-fbYellow text-fbDark rounded-lg font-bold">
                                Stok: <span className="font-medium">{foodData.stock}</span>
                            </li>
                            {new Date(foodData.expireDate) > systemDate ? (
                                <li className="px-4 py-[2px] bg-secondaryGreen rounded-lg text-fbWhite font-bold">
                                    Kadaluarsa: <span className="font-medium">{formattedExpireDate}</span>
                                </li>
                            ) : (
                                <li className="px-4 py-[2px] bg-red-500 rounded-lg text-fbWhite font-bold">
                                    Kadaluarsa: <span className="font-medium">{formattedExpireDate}</span>
                                </li>
                            )}

                        </ul>
                        <h2 className="font-semibold text-3xl text-fbDark">{formattedPrice}</h2>
                        <hr className="mt-2 border-[1.5px] border-gray-200" />
                        <h3 className="font-bold text-lg pt-2 text-fbDark">Deskripsi Barang</h3>
                        <p className="text-sm py-2 font-regular">
                            <span className="font-semibold text-gray-500">Waktu Ambil: </span>
                            {foodData.pickUpTimeStart} - {foodData.pickUpTimeEnd}
                        </p>
                        <p className="text-sm">{foodData.description}</p>
                        <hr className="my-4 border-[1.5px] border-gray-200" />
                        <div className="flex flex-row">
                            {sellerDetails && (
                                <>
                                    <div className="flex flex-col">
                                    <img
                                        className="w-10 h-10  rounded-full object-cover"
                                        src={sellerDetails.photo}
                                        alt="Food Photo"
                                        />
                                    </div>
                                    <div className="flex flex-col px-4 justify-center md:justify-start ">
                                        <a className="hover:underline" href="">
                                            <h3 className="font-bold text-sm md:text-md text-fbBlack">{sellerDetails.name}</h3>
                                        </a>
                                        <p className="text-xs">{sellerCity}, {sellerProvince}</p>
                                        
                                    </div>  
                                </>
                            )}

                        </div>
                        <a className="md:hidden flex flex-col my-4" href={`/dashboard/seller/penjualan/edit/${foodData.id}`}>
                            <button className="py-2 justify-center mt-4 px-6 w-full inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primaryGreen hover:bg-secondaryGreen text-white  disabled:opacity-50 disabled:pointer-events-none" 
                            type="button">
                                <p>Edit Data</p>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoodDetailSeller;
