"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

 

const Page = () => {
    return(
        <div className="min-h-screen mx-auto flex justify-center bg-primaryGreen items-center">
            <div className="flex items-center justify-center text-fbWhite flex-col">
                <FileSearch size={64} />
                <h1 className=" font-bold text-3xl px-4 py-8">404 - NOT FOUND!</h1>
                <Link href="/" className="text-fbYellow hover:text-accent hover:underline transition-all">Kembali</Link>
            </div>
        </div>
    );
}
export default Page;