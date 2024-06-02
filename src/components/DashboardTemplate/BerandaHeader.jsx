"use client";

import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const BerandaHeader = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const name = Cookies.get("username")
        setUserName(name)
    }, [])

    return (
        <>
            <section className="berandaHeader flex flex-col w-full rounded-xl">
                <div className="p-8">
                    <h1 className="font-bold text-xl text-fbWhite">Selamat datang, <span className="text-fbYellow">{userName}</span></h1>
                    <p className="text-fbWhite text-3xl font-bold py-4">Terimakasih telah menjadi bagian dari <span className="text-fbYellow">FoodBless!</span></p>
                    <p className="text-fbWhite text-md md:text-xl italic font-bold py-2">“ Jangan biarkan makanan mendapat takdir yang pahit karena tidak terjual.”</p>
                </div>
            </section>
        </>
    );

}

export default BerandaHeader;