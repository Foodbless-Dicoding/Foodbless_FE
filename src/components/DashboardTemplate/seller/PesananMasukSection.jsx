"use client";

import { BoxArrowDown } from "@phosphor-icons/react";

const PesananMasukSection = ({orderInbox}) => {

    return (
        <>
            <div className="flex flex-row text-primaryGreen gap-2 pb-4 items-center">
                <BoxArrowDown weight="bold" size={32} />
                <h1 className="text-2xl font-bold">Pesanan Masuk</h1>
            </div>
            <section className="flex flex-col w-full min-h-[500px] rounded-lg bg-neutral-50 p-4">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                        <button
                        type="button"
                        className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none active"
                        id="tabs-with-badges-item-1"
                        data-hs-tab="#tabs-with-badges-1"
                        aria-controls="tabs-with-badges-1"
                        role="tab"
                        >
                        Diproses <span className="hs-tab-active:bg-fbYellow hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-primaryGreen">99+</span>
                        </button>
                        <button
                        type="button"
                        className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none"                        id="tabs-with-badges-item-2"
                        data-hs-tab="#tabs-with-badges-2"
                        aria-controls="tabs-with-badges-2"
                        role="tab"
                        >
                        Selesai <span className="hs-tab-active:bg-fbYellow hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-primaryGreen">99+</span>
                        </button>
                        <button
                        type="button"
                        className="hs-tab-active:font-semibold hs-tab-active:border-primaryGreen hs-tab-active:text-bg-primaryGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primaryGreen focus:outline-none focus:text-secondaryGreen disabled:opacity-50 disabled:pointer-events-none"                        
                        id="tabs-with-badges-item-3"
                        data-hs-tab="#tabs-with-badges-3"
                        aria-controls="tabs-with-badges-3"
                        role="tab"
                        >
                        Dibatalkan <span className="hs-tab-active:bg-fbYellow hs-tab-active:text-primaryGreen ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-primaryGreen">99+</span>
                        </button>
                    </nav>
                </div>
                <div className="mt-3">
                <div id="tabs-with-badges-1" role="tabpanel" aria-labelledby="tabs-with-badges-item-1">
                    <p className="text-gray-500">
                    This is the <em className="font-semibold text-gray-800">first</em> item's tab body.
                    </p>
                </div>
                <div id="tabs-with-badges-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-2">
                    <p className="text-gray-500">
                    This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
                    </p>
                </div>
                <div id="tabs-with-badges-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-3">
                    <p className="text-gray-500">
                    This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
                    </p>
                </div>
                </div>

                

            </section>
        
        </>
    );

}

export default PesananMasukSection;