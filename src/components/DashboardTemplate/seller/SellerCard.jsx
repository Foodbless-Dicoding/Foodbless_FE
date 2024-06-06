/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import { BookOpen, GearSix, PencilSimpleLine, Stack, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

const SellerCard = ({ foodData }) => {

    // useState Lists
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [systemDate, setSystemDate] = useState(new Date());

    // Utilities Functions
    const truncateWords = (str, numWords) => {
        if (!str) return "";
        const words = str.split(" ");
        if (words.length <= numWords) return str;
        return words.slice(0, numWords).join(" ") + "...";
    };

    // change to IDR format
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(foodData.price ? parseFloat(foodData.price) : 0);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    // useEffect for systemDate
    useEffect(() => {
        const date = new Date();
        setSystemDate(date);
    }, []);


    return (
        <>
            <section className="flex flex-col rounded-xl bg-fbWhite w-full hover:shadow-md transition">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[70%] rounded-t-xl overflow-hidden">
                {foodData.stock == 0 || new Date(foodData.expireDate) < systemDate ? (
                            <>
                                <img
                                    className="size-full absolute top-0 start-0 object-cover rounded-t-xl filter grayscale"
                                    src={foodData.photo}
                                    alt="Image of Food"
                                />                    
                            </>
                        ) : (
                            <>
                                <img
                                className="size-full absolute top-0 start-0 object-cover rounded-t-xl"
                                src={foodData.photo}
                                alt="Image of Food"
                                />           
                            </>
                        )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-xl text-primaryGreen">{truncateWords(foodData.name, 3)}</h3>
                    <p className="font-bold text-lg text-fbDark">{formattedPrice}</p>
                    <div className="flex flex-row gap-2 py-2 flex-wrap">
                    {foodData.stock == 0 ? (
                            <>
                                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-red-500 text-fbWhite">
                                    <Stack weight="bold" size={20} />
                                    Tersisa {foodData.stock}
                                </span> 
                            </>

                        ) : (
                            <>
                                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-fbYellow text-fbDark">
                                    <Stack weight="bold" size={20} />
                                    Tersisa {foodData.stock}
                                </span>       
                            </>
                        )}
                        {new Date(foodData.expireDate) > systemDate ? (
                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-secondaryGreen text-white">
                                <ThumbsUp size={20} weight="bold" />
                                Layak
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-red-500 text-white">
                                <ThumbsDown size={20} weight="bold" />
                                Kadaluarsa
                            </span>
                        )}
                    </div>
                    <div className="relative">
                        <button
                            id="hs-dropdown-with-icons"
                            type="button"
                            onClick={toggleDropdown}
                            className="hs-dropdown-toggle w-full py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg text-fbWhite bg-primaryGreen disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <GearSix size={20} weight="bold" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-md rounded-lg p-2 divide-y divide-gray-200">
                                <div className="py-2 first:pt-0 last:pb-0">
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-fbDark font-regular hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href={`/dashboard/seller/penjualan/${foodData.id}`}
                                    >
                                        <BookOpen size={20} />
                                        Detail Barang
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg font-semibold text-sm text-primaryGreen font-regular hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href={`/dashboard/seller/penjualan/edit/${foodData.id}`}
                                    >
                                        <PencilSimpleLine weight="bold" size={20} />
                                        Edit Barang
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <hr className="border-neutral-300 border-[1.5px] my-2 mt-4" />
                </div>
            </section>
            {dropdownOpen && <div className="fixed inset-0 z-0" onClick={closeDropdown} />}
        </>
    );
}

export default SellerCard;
