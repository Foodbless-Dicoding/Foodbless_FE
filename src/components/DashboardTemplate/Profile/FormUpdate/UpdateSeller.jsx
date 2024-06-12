/* eslint-disable @next/next/no-img-element */
"use client";

import { X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { putUpdateUser } from "@/data/api-endpoint";
import { postLogout } from "@/data/api-endpoint";

const UpdateSeller = ({userDetails, 
    jwtAuth, 
    fetchCities, 
    fetchProvincies}) => {

    // Based on Form Input
    const [user_id, setUser_id] = useState("");
    const [id_seller, setId_seller] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [nomorWA, setNomorWA] = useState(0);
    const [address, setAddress] = useState("");
    const [selectedProvince, setSelectedProvince] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);
    const [filteredCities, setFilteredCities] = useState([]);
    const [photo, setPhoto] = useState("");

    // Misc - Profile Picture Purpose
    const [oldPhoto, setOldPhoto] = useState("");

    // Halder Province Change
    const handleProvinceChange = (e) => {
        const provinceId = parseInt(e.target.value); 
        setSelectedProvince(provinceId);
    };

    // Handler City Change
    const handleCityChange = (e) => {
        const cityId = parseInt(e.target.value);
        setSelectedCity(cityId);
    }

    // Handler Photo Change
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]); 
    };

    // For Default Value useEffect
    useEffect(() => {
        if (userDetails) {
            // Set value from userDetails
            setUser_id(userDetails.user_id || "");
            setId_seller(userDetails.id_seller || "");
            setEmail(userDetails.email || "");
            setUsername(userDetails.username || "");
            setName(userDetails.name || "");
            setDesc(userDetails.desc || "");
            setNomorWA(userDetails.nomorWA || "");
            setAddress(userDetails.address || "");
            setSelectedProvince(userDetails.city_province_id || 0);
            setSelectedCity(userDetails.city_id || 0);
            
            // Misc - Profile Picture Purpose
            setOldPhoto(userDetails.photo || "");
        }
    }, [userDetails]);

    // Filter cities based on selected province useEffect
    useEffect(() => {
        // Filter cities based on selected province
        const filtered = fetchCities.filter((city) => city.provinceId === selectedProvince);
        setFilteredCities(filtered);
      }, [selectedProvince, fetchCities]);

    //   Submit Handler
    const handleSubmit = async(e) => {
        e.preventDefault();

        const updateData = {
            user_id: user_id,
            id_seller: id_seller,
            username: username,
            email: email,
            password: password,
            name: name,
            desc: desc,
            nomorWA: nomorWA,
            address: address,
            city_id: selectedCity,
            city_province_id: selectedProvince,
            photo: photo,
        };

        // Fetching PUT updateData API
        try {
            if (!updateData) {
                console.log("Data is empty");
                return;
            }else if (!jwtAuth) {
                console.log("Token is empty");
                return;    
            }

            await putUpdateUser("updateSeller", jwtAuth, updateData);

            // Logout after update
            postLogout();

        } catch (error) {
            console.error("Error updating data: ", error);
        }
    }


    return (
        <>
            <form id="updateProfile_form" className="flex flex-col" onSubmit={handleSubmit} >
                <h2 className="px-4 pt-4 font-semibold text-fbDark">Update Foto Profil</h2>
                <div className="flex flex-row px-4 py-4">
                    <img className="w-[100px] h-[100px] rounded-lg object-cover" src={`${oldPhoto}`} alt="Profile" />
                    <div className="flex items-center px-4">
                        <input  type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                name="foto"
                                id="foto" 
                                className="w-full text-sm text-fbDark
                                file:me-4 file:py-2 file:px-4
                                file:rounded-2xl file:border-0
                                file:text-sm file:font-semibold
                                file:bg-fbYellow file:text-fbDark
                                file:transition ease-in-out hover:-translate-y-1 duration-200 cursor-pointer
                                file:disabled:opacity-50 file:disabled:pointer-events-none"
                        />
                    </div>
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
                                minLength={6}
                                maxLength={16}
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
                        <p className="text-sm text-neutral-400">Masukkan Password (Baru/Lama)</p>
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
                            <p className="text-sm text-neutral-400">Dapat diisi dengan nama toko atau usaha</p>
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                    <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Deskripsi <span className="text-fbRed">*</span></label>
                    <textarea
                        className="rounded-lg w-full  bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        rows="5"
                        placeholder="Tulis deskripsi bisnismu disini.."
                    >
                    </textarea>
                    <p className="text-sm text-neutral-400">Deskripsikan jenis usaha apa yang anda jalankan</p>
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Nomor WA <span className="text-red-500">*</span></label>
                        <input placeholder="Masukkan Nomor WA.." 
                            type="number"
                            id="nomorWA"
                            name="nomorWA" 
                            value={nomorWA}
                            onChange={(e) => setNomorWA(e.target.value)} 
                            className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" />
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                        <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Alamat Lengkap <span className="text-red-500">*</span></label>
                        <input placeholder="Masukkan Alamat Lengkap.." 
                            type="text"
                            id="address"
                            name="address" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm" />
                </div>
                <div className="input-item flex flex-col gap-2 px-4 py-2 pt-4">
                    <label className="text-fbDark text-sm md:text-md pl-4 font-semibold">Provinsi & Kota <span className="text-red-500">*</span></label>
                    <select
                        id="province_id"
                        className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                        onChange={handleProvinceChange}
                        value={selectedProvince}
                    >
                        <option className="text-md" value="">-- Daftar Provinsi --</option>
                        {fetchProvincies.map((prov) => {
                        return (
                            <option key={prov.id} value={prov.id}>
                            {prov.name}
                            </option>
                        );
                        })}
                    </select>
                    <select
                        id="city_id"
                        className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                        onChange={handleCityChange}
                        value={selectedCity}
                    >
                        <option className="text-md" value="">-- Daftar Kota Sesuai Provinsi --</option>
                        {filteredCities.map((city) => {
                        return (
                            <option key={city.id} value={city.id}>
                            {city.name}
                            </option>
                        );
                        })}
                    </select>
                    <div className="flex flex-row justify-end">
                        <button type="button" className="bg-primaryGreen my-4 py-4 text-fbWhite text-sm md:text-md w-[200px] font-bold rounded-lg p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200" data-hs-overlay="#hs-slide-down-animation-modal">
                            Update
                        </button>
                        {/* Modals */}
                        <div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                                    <div className="flex justify-between items-center py-3 px-4 border-b ">
                                        <h3 className="font-bold text-red-500 dark:text-white">
                                            Peringatan !
                                        </h3>
                                        <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-slide-down-animation-modal">
                                        <span className="sr-only">Close</span>
                                        <X size={18} />
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-y-auto">
                                        <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                            Anda akan otomatis <span className="text-red-500 font-bold">Logout</span> setelah meng-update data ini, pastikan semua kolom sudah terisi lengkap, lanjutkan?
                                        </p>
                                    </div>
                                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                        <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white  disabled:opacity-50 disabled:pointer-events-none">
                                            Lanjutkan!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );

}

export default UpdateSeller;