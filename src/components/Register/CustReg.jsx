"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { postRegister } from "@/data/api-endpoint.js";

const CustReg = ({ fetchProvince, fetchCity }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [photo, setPhoto] = useState(""); 
    const [name, setName] = useState("");
    const [nomorWA, setNomorWA] = useState(62); 
    const [address, setAddress] = useState("");
    const [selectedProvince, setSelectedProvince] = useState(0);
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(0);

  useEffect(() => {
    // Filter cities based on selected province
    const filtered = fetchCity.filter((city) => city.provinceId === selectedProvince);
    setFilteredCities(filtered);
  }, [selectedProvince, fetchCity]);

  const handleProvinceChange = (e) => {
    const provinceId = parseInt(e.target.value);
    setSelectedProvince(provinceId);
  };

  const handleCityChange = (e) => {
    const cityId = parseInt(e.target.value);
    setSelectedCity(cityId);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = {
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        role: role,
        photo: photo,
        name: name,
        nomorWA: nomorWA,
        address: address,
        city_id: selectedCity,
        city_province_id: selectedProvince,
    };

    // Fetch POST API
    try {
      if (!registerData) {
        console.log("No Data to Send");
        return;
      }
      await postRegister("createCustomer", registerData);
      console.log("Data Sent: ", registerData);
    } catch (error) {
      console.error("Error sending data: ", error);
      throw error;
    }

    // Reset Form
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setPhoto("");
    setName("");
    setNomorWA(0);
    setAddress("");
    setSelectedProvince(0);
    setSelectedCity(0);
  };

  return (
    <>
      <div className="flex flex-col items-center m-6 py-2 w-[600px] bg-secondaryGreen bg-opacity-75 rounded-2xl">
        <Image className="py-2 " src="/assets/logo_login.png" alt="FoodBless Logo" width={48} height={48} />
        <h1 className="text-fbYellow font-bold text-xl md:text-2xl text-center mb-4">Daftar Sebagai Customer</h1>
        <form id="cust_register flex flex-col w-full px-4" onSubmit={handleSubmit}>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Email</label>
            <input
              placeholder="Masukkan Email.."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm"
            />
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Username</label>
            <input
              placeholder="Masukkan Username.."
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm"
            />
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Nama Customer</label>
            <input
              placeholder="Masukkan Namamu.."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm"
            />
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Password</label>
            <div className="relative flex flex-row items-center">
              <input
                max={16}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="hs-toggle-password"
                type="password"
                name="password"
                className="p-2 w-full text-fbDark rounded-2xl text-sm bg-fbWhite disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Masukkan Password.."
              />
              <button
                type="button"
                data-hs-toggle-password='{"target": "#hs-toggle-password"}'
                className="absolute -top-0.5 end-0 p-3.5 rounded-e-md"
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-fbDark"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Konfirmasi Password</label>
            <div className="relative flex flex-row items-center">
              <input
                max={16}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="hs-toggle-confirmPassword"
                type="password"
                name="confirmPassword"
                className="p-2 w-full text-fbDark rounded-2xl text-sm bg-fbWhite disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Masukkan Password.."
              />
              <button
                type="button"
                data-hs-toggle-password='{"target": "#hs-toggle-confirmPassword"}'
                className="absolute -top-0.5 end-0 p-3.5 rounded-e-md"
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-fbDark"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Alamat</label>
            <input
              placeholder="Masukkan Alamatmu.."
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              name="address"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm"
            />
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Nomor WA</label>
            <input
              placeholder="Dimulai dari angka 62"
              type="number"
              value={nomorWA}
              onChange={(e) => setNomorWA(e.target.value)}
              id="nomorWA"
              name="nomorWA"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm"
            />
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Provinsi & Kota</label>
            <select
              id="province_id"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm"
              onChange={handleProvinceChange}
              value={selectedProvince}
            >
              <option value="">-- Daftar Provinsi --</option>
              {fetchProvince.map((prov) => {
                return (
                  <option key={prov.id} value={prov.id}>
                    {prov.name}
                  </option>
                );
              })}
            </select>
            <select
              id="city_id"
              className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm"
              onChange={handleCityChange}
              value={selectedCity}
            >
              <option value="">-- Daftar Kota Sesuai Provinsi --</option>
              {filteredCities.map((city) => {
                return (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-item flex flex-col gap-2 py-2">
            <label className="text-fbWhite text-sm md:text-md pl-4">Upload Foto</label>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                name="foto"
                id="foto"
                className="block w-full text-sm text-fbWhite file:me-4 file:py-2 file:px-4 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-fbYellow file:text-fbDark file:hover:bg-fbWhite file:disabled:opacity-50 file:disabled:pointer-events-none"
              />
            </label>
          </div>
          <button type="submit" className="bg-fbRed my-4 py-4 text-fbWhite text-sm md:text-md w-full font-bold rounded-lg p-2 hover:scale-110">
            Daftar
          </button>
        </form>
      </div>
    </>
  );
};
export default CustReg;
