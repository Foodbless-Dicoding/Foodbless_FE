"use client";

import { HardDrive } from "@phosphor-icons/react";

const NoDataCustCard = () => {

    return (
        <>
            <div className="min-h-60 w-full flex flex-col bg-fbWhite border shadow-sm rounded-xl ">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <HardDrive className="text-primaryGreen" size={48} weight="bold" />
                    <p className="mt-2 text-sm text-center font-semibold text-primaryGreen dark:text-neutral-300">
                        Maaf, sepertinya tidak ada makanan yang tersedia saat ini. Silahkan cek lain waktu!
                    </p>
                </div>
            </div>
        </>
    );
}

export default NoDataCustCard;