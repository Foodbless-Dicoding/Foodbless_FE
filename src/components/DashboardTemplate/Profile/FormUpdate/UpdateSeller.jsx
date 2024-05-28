/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const UpdateSeller = ({userDetails, jwtAuth}) => {

    // Based on Form Input
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [nomorWA, setNomorWA] = useState(0);
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");


    // Misc - Profile Picture Purpose
    const [oldPhoto, setOldPhoto] = useState("");

    useEffect(() => {
        if (userDetails) {
            // Set value from userDetails
            setEmail(userDetails.email || "");
            setUsername(userDetails.username || "");
            setName(userDetails.name || "");



            // Misc - Profile Picture Purpose
            setOldPhoto(userDetails.photo || "");
        }
    }, [userDetails]);


    return (
        <>
            <form id="updateProfile_form" className="flex flex-col" >
                <h2 className="px-4 pt-4 font-semibold text-fbDark">Foto Profil <span className="text-red-500">*</span></h2>
                <div className="flex flex-row px-4 py-4">
                    {/* <img className="w-6 h-6 rounded-full" src={`https://ferdian-q4w3i3hz7a-uc.a.run.app${oldPhoto}`} alt="Profile" /> */}
                    <img className="w-[100px] rounded-xl" src="https://placehold.co/100" alt="Profile" />
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Email <span className="text-red-500">*</span></label>
                        <input placeholder="Masukkan Email.."
                            type="email"
                            id="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" />
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Username <span className="text-red-500">*</span></label>
                        <input placeholder="Masukkan Username.." 
                            type="text"
                            id="username"
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" />
                </div>
                <div className="nput-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Password <span className="text-red-500">*</span></label>
                        <div className="relative flex flex-row items-center">
                            <input max={16} 
                                id="hs-toggle-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                type="password" 
                                name="password" 
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" placeholder="Masukkan Password Baru.."/>
                            <button type="button" data-hs-toggle-password='{
                                "target": "#hs-toggle-password"
                            }' className="absolute -top-0.5 end-0 p-3.5 rounded-e-md">
                            <svg className="flex-shrink-0 size-3.5 text-fbDark" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                            </svg>
                            </button>
                        </div>
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Nama Seller <span className="text-red-500">*</span></label>
                        <input placeholder="Masukkan Nama Seller.." 
                            type="text"
                            id="name"
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" />
                            <p className="text-sm text-neutral-400">Dapat diisi dengan Nama Toko/Usaha</p>
                </div>
            </form>
        </>
    );

}

export default UpdateSeller;