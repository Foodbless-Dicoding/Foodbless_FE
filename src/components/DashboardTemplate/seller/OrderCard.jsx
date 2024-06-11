"use client";
import moment from "moment";
import Cookies from "js-cookie";
import { PaperPlaneRight } from "@phosphor-icons/react";
import {putOrderToProcess, putOrderToFinish, putOrderToCancel} from "@/data/api-endpoint";

const OrderCard = ({ order,jwtToken }) => {

    // Get Roles from Cookies
    const role = Cookies.get("role");

    // Proses Pesanan Handler
    const diprosesPesananHandler = async(e) => {
        e.preventDefault();
        const diprosesData = {
            seller_id: order.seller_id,
            order_id: order.order_id,
        }

        if (diprosesData) {
            try {
                await putOrderToProcess(jwtToken, diprosesData);
                window.location.reload();
            } catch (error) {
                console.error("Error processing order: ", error);
            } 
        }
    }

    // Selesaikan Pesanan Handler
    const selesaiPesananHandler = async(e) => {
        e.preventDefault();
        const selesaiData = {
            seller_id: order.seller_id,
            order_id: order.order_id,
        }

        if (selesaiData) {
            try {
                await putOrderToFinish(jwtToken, selesaiData);
                window.location.reload();
            } catch (error) {
                console.error("Error finishing order: ", error);
            } 
        }
    }


    // Batalkan Pesanan Handler
    const batalkanPesananHandler = async(e) => {
        e.preventDefault();
        const batalkanData = {
            seller_id: order.seller_id,
            order_id: order.order_id,
        }

        if (batalkanData) {
            try {
                await putOrderToCancel(jwtToken, batalkanData);
                window.location.reload();
            } catch (error) {
                console.error("Error cancelling order: ", error);
            } 
        }
    }

    // Formatting Date using MomentJS
    const formattedDate = moment(order.createdAt).locale('id').format('LL LT');

    // Formatting Money to IDR
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(order.price ? parseFloat(order.price) : 0);

    return (
        <>
            <section className="flex flex-col p-4 rounded-lg w-full border border-neutral-200 bg-neutral-50 hover:shadow-md min-h-[150px]">
                {/* Top Header */}
                <div className="flex flex-row flex-wrap items-center text-primaryGreen">
                    <PaperPlaneRight size={20} weight="duotone" />
                    <h2 className="font-bold text-sm mx-2">Pesanan <span className="font-medium">{formattedDate}</span></h2>
                    <h2 className="font-bold text-sm">Qty <span className="font-medium">{order.amount}</span></h2>
                    {order.status === "diterima" && (
                        <>
                            <span className="inline-flex items-center mx-2 gap-x-1.5 py-1 px-3 rounded-lg text-xs font-bold bg-fbYellow text-primaryGreen">
                                Diterima
                            </span>               
                        </>
                    )}
                    {order.status === "diproses" && (
                        <>
                            <span className="inline-flex items-center mx-2 gap-x-1.5 py-1 px-3 rounded-lg text-xs font-bold bg-transparent border border-primaryGreen text-primaryGreen">
                                Diproses
                            </span>               
                        </>
                    )}
                    {order.status === "selesai" && (
                        <>
                            <span className="inline-flex items-center mx-2 gap-x-1.5 py-1 px-3 rounded-lg text-xs font-bold bg-primaryGreen text-fbWhite">
                                Selesai
                            </span>               
                        </>
                    )}
                    {order.status === "dibatalkan" && (
                        <>
                            <span className="inline-flex items-center mx-2 gap-x-1.5 py-1 px-3 rounded-lg text-xs font-bold bg-transparent border border-red-500 text-red-500">
                                Dibatalkan
                            </span>               
                        </>
                    )}

                </div>
                {/* Middle Header */}
                <div className="flex flex-row flex-wrap justify-between">
                    <div className="flex flex-col flex-wrap text-fbDark my-2">
                        {role === "seller" && (
                            <>
                                <a target="_blank" href={`/dashboard/seller/penjualan/${order.food_id}`}>
                                    <h1 className="font-bold hover:underline text-lg">{order.food_name}</h1>
                                </a>
                            </>
                        )}

                        {role === "customer" && (
                            <>
                                <a target="_blank" href={`/dashboard/customer/cari-makanan/${order.food_id}`}>
                                    <h1 className="font-bold hover:underline text-lg">{order.food_name}</h1>
                                </a>
                            </>
                        )}

                        {role === "seller" && (
                            <>
                                <h3 className="font-medium text-sm">Dipesan oleh <a href="" className="font-bold">{order.customer_name}</a></h3>    
                            </>
                        )}
                        {role === "customer" && (
                            <>
                                <h3 className="font-medium text-sm">Dipesan dari <a href={`/dashboard/profile/seller/${order.seller_id}`} className="font-bold hover:underline">{order.seller_name}</a></h3>
                            </>
                        )}
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="md:flex md:flex-col hidden flex-wrap border-r-2 border-neutral-200 mr-4">
                        </div>
                        <div className="flex flex-col flex-wrap text-fbDark my-2">
                            <h1 className="font-medium text-md">Total Pesanan</h1>
                            <h2 className="font-bold text-sm">{formattedPrice}</h2>
                        </div>
                    </div>
                </div>

                {/* Bottom Header */}
                <div className="flex flex-row flex-wrap items-center justify-between pt-4">
                    <h5 className="font-medium text-sm text-fbDark">ID Pesanan <span className="font-bold">{order.order_id}</span> </h5>
                    {role === "seller" && (
                        <>
                            <div className="flex flex-row flex-wrap pt-2">
                                {order.status === "diterima" || order.status === "diproses" ? (
                                    <>
                                        <button onClick={batalkanPesananHandler} type="button" className="hs-dropdown-toggle py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-bold hover:underline rounded-lg text-red-500 bg-transparent disabled:opacity-50 disabled:pointer-events-none">
                                            Batalkan
                                        </button>            
                                    </>
                                ) : (
                                    <>
                                    
                                    </>
                                )}

                                {order.status === "diterima" && (
                                    <>
                                        <button onClick={diprosesPesananHandler} type="button" className="hs-dropdown-toggle py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-bold rounded-lg text-primaryGreen border border-primaryGreen disabled:opacity-50 disabled:pointer-events-none">
                                            Proses Pesanan
                                        </button>
                                    </>
                                )}
                                {order.status === "diproses" && (
                                    <>
                                        <button onClick={selesaiPesananHandler} type="button" className="hs-dropdown-toggle py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-bold rounded-lg text-primaryGreen border border-primaryGreen disabled:opacity-50 disabled:pointer-events-none">
                                            Selesaikan
                                        </button>
                                    </>
                                )}


                            </div>  
                        </>
                    )}

                    {role === "customer" && (
                        <>
                            {order.status === "selesai" && (
                                <>
                                    <a target="_blank" href={`/dashboard/profile/seller/${order.seller_id}`}>
                                        <button type="button" className="hs-dropdown-toggle py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-bold rounded-lg text-primaryGreen border border-primaryGreen disabled:opacity-50 disabled:pointer-events-none">
                                            Beri Ulasan
                                        </button>
                                    </a>
                                </>
                            )}
                        </>
                    )}

                </div>
            </section>
        </>
    )

}

export default OrderCard;