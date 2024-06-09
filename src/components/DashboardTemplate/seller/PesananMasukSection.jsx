import { BoxArrowDown } from "@phosphor-icons/react";
import { useState, useEffect, useCallback } from "react";
import OrderCard from "@/components/DashboardTemplate/seller/OrderCard";

const PesananMasukSection = ({ orderData, jwtToken }) => {


    const [orderDiterima, setOrderDiterima] = useState([]);
    const [orderDiproses, setOrderDiproses] = useState([]);
    const [orderSelesai, setOrderSelesai] = useState([]);
    const [orderDibatalkan, setOrderDibatalkan] = useState([]);

    const filterOrders = useCallback(() => {
        if (orderData) {
            // Filter orders by status:
            // Diterima
            const filterDiterima = orderData.filter((order) => order.status === "diterima");
            filterDiterima.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setOrderDiterima(filterDiterima);

            // Diproses
            const filterDiproses = orderData.filter((order) => order.status === "diproses");
            filterDiproses.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setOrderDiproses(filterDiproses);

            // Selesai
            const filterSelesai = orderData.filter((order) => order.status === "selesai");
            filterSelesai.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setOrderSelesai(filterSelesai);

            // Dibatalkan
            const filterDibatalkan = orderData.filter((order) => order.status === "dibatalkan");
            filterDibatalkan.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setOrderDibatalkan(filterDibatalkan);

        }
    }, [orderData]);

    useEffect(() => {
        filterOrders();
    }, [filterOrders]);

    return (
        <>
        <div className="px-8 py-4">
            <div className="flex flex-row text-primaryGreen gap-2 mb-4 items-center">
                <BoxArrowDown weight="bold" size={30} />
                <h1 className="text-2xl font-bold">Pesanan Masuk</h1>
            </div>
            <section className="flex flex-col w-full min-h-[400px] rounded-lg bg-neutral-50 p-4">
                <div className="border-b border-gray-200">
                    <nav className="flex flex-wrap space-x-1 items-center" aria-label="Tabs" role="tablist">
                        <h3 className="font-bold text-md text-fbDark mx-2">Status</h3>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none active"
                            id="tabs-with-badges-item-1"
                            data-hs-tab="#tabs-with-badges-1"
                            aria-controls="tabs-with-badges-1"
                            role="tab"
                        >
                            Diterima
                            {orderDiterima.length > 0 && (
                                <span className="hs-tab-active:bg-fbYellow font-bold hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs bg-fbYellow bg-opacity-30 text-primaryGreen">
                                    {orderDiterima.length}
                                </span>
                            )}
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none"
                            id="tabs-with-badges-item-2"
                            data-hs-tab="#tabs-with-badges-2"
                            aria-controls="tabs-with-badges-2"
                            role="tab"
                        >
                            Diproses
                            {orderDiproses.length > 0 && (
                                <span className="hs-tab-active:bg-fbYellow font-bold hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs bg-fbYellow bg-opacity-30 text-primaryGreen">
                                    {orderDiproses.length}
                                </span>
                            )}
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none"
                            id="tabs-with-badges-item-3"
                            data-hs-tab="#tabs-with-badges-3"
                            aria-controls="tabs-with-badges-3"
                            role="tab"
                        >
                            Selesai
                            {orderSelesai.length > 0 && (
                                <span className="hs-tab-active:bg-fbYellow font-bold hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs bg-fbYellow bg-opacity-30 text-primaryGreen">
                                    {orderSelesai.length}
                                </span>
                            )} 
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none"
                            id="tabs-with-badges-item-4"
                            data-hs-tab="#tabs-with-badges-4"
                            aria-controls="tabs-with-badges-4"
                            role="tab"
                        >
                            Dibatalkan
                            {orderDibatalkan.length > 0 && (
                                <span className="hs-tab-active:bg-fbYellow font-bold hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs bg-fbYellow bg-opacity-30 text-primaryGreen">
                                    {orderDibatalkan.length}
                                </span>
                            )}  
                        </button>
                    </nav>
                </div>
                <div className="mt-3">
                    <div className="flex flex-col gap-4" id="tabs-with-badges-1" role="tabpanel" aria-labelledby="tabs-with-badges-item-1">
                        {orderDiterima.length > 0 ? (
                            orderDiterima.map((order) => (
                                <OrderCard key={order.order_id} order={order} jwtToken={jwtToken} />
                            ))
                        ) : (
                            <p className="text-gray-500">Data tidak ditemukan.</p>
                        )}
                    </div>
                    <div id="tabs-with-badges-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-2">
                        {/* Content for "Diproses" tab */}
                        <div className="flex flex-col gap-4">
                            {orderDiproses.length > 0 ? (
                                orderDiproses.map((order) => (
                                    <OrderCard key={order.order_id} order={order} jwtToken={jwtToken} />
                                ))
                            ) : (
                                <p className="text-gray-500">Data tidak ditemukan.</p>
                            )}
                        </div>
                    </div>
                    <div id="tabs-with-badges-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-3">
                        {/* Content for "Selesai" tab */}
                        <div className="flex flex-col gap-4">
                            {orderSelesai.length > 0 ? (
                                orderSelesai.map((order) => (
                                    <OrderCard key={order.order_id} order={order} jwtToken={jwtToken} />
                                ))
                            ) : (
                                <p className="text-gray-500">Data tidak ditemukan.</p>
                            )}
                        </div>
                    </div>
                    <div id="tabs-with-badges-4" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-4">
                        {/* Content for "Dibatalkan" tab */}
                        <div className="flex flex-col gap-4">
                            {orderDibatalkan.length > 0 ? (
                                orderDibatalkan.map((order) => (
                                    <OrderCard key={order.order_id} order={order} jwtToken={jwtToken} />
                                ))
                            ) : (
                                <p className="text-gray-500">Data tidak ditemukan.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>  
        </div>

        </>
    );
};

export default PesananMasukSection;
