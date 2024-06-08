/* eslint-disable @next/next/no-img-element */
"use client";

import { ClockCountdown, Stack, ThumbsUp } from "@phosphor-icons/react";
import moment from 'moment';

const CustomerCard = ({ foodData }) => {

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
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(foodData.price ? parseFloat(foodData.price) : 0);

    // format pick up times using Moment.js
    const pickUpTimeStart = moment(foodData.pickUpTimeStart, 'HH:mm:ss').format('HH:mm A');
    const pickUpTimeEnd = moment(foodData.pickUpTimeEnd, 'HH:mm:ss').format('HH:mm A');

    // determine text color based on pick up times
    const now = moment();
    const isOpen = now.isBetween(moment(foodData.pickUpTimeStart, 'HH:mm:ss'), moment(foodData.pickUpTimeEnd, 'HH:mm:ss'));
    const textColor = isOpen ? 'text-secondaryGreen' : 'text-red-500';

    return (
        <>
            <a className="flex flex-col rounded-xl bg-fbWhite w-full hover:shadow-md transition" 
                href={`/dashboard/customer/cari-makanan/${foodData.id}`}>
                <section>
                    <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[70%] rounded-t-xl overflow-hidden">
                        {foodData.stock == 0 ? (
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
                </section>
                {/* Card Content */}
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

                        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-secondaryGreen text-white">
                            <ThumbsUp size={20} weight="bold" />
                            Layak
                        </span>
                    </div>
                    <hr className="my-4 border-[1.5px] border-gray-200" />
                    {foodData.stock == 0 ? (
                        <>
                            <p className="text-sm font-semibold flex flex-row gap-2 text-fbDark">
                                <ClockCountdown className="font-semibold" size={20} weight="bold" />
                                -
                            </p>  
                        </>
                    ) : (
                        <>
                            <p className={`text-sm font-semibold flex flex-row gap-2 ${textColor}`}>
                                <ClockCountdown className="font-semibold" size={20} weight="bold" />
                                Dari {pickUpTimeStart} - {pickUpTimeEnd}
                            </p>  
                        </>
                    )}

                </div>
            </a>
        </>
    );
}

export default CustomerCard;
