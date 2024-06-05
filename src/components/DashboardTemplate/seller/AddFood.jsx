/* eslint-disable react/no-unescaped-entities */
"use client";

import { Plus } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import {postCreateFoodItem} from "@/data/api-endpoint";



const AddFood = ({jwtToken, sellerId, sellerCityId}) => {

    /* 
        useState Management
    */

    // Dynamic Value
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [pickUpTimeStart, setPickUpTimeStart] = useState("");
    const [pickUpTimeEnd, setPickUpTimeEnd] = useState("");
    const [photo, setPhoto] = useState("");

    /* 
        Function Management
    */

    // Money IDR Formatter
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(price ? parseFloat(price) : 0);

    // Photo Handler
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]); // Store the selected file
    };

    // Form Processing
    const handleSubmit = async(e) => {
        e.preventDefault();
        const foodData = {
            seller_id : sellerId,
            seller_city_id : sellerCityId,
            name : name,
            price : price,
            stock : stock,
            description : description,
            expireDate : expireDate,
            pickUpTimeStart : pickUpTimeStart,
            pickUpTimeEnd : pickUpTimeEnd,
            photo : photo
        };

        try {
            if (foodData && foodData.seller_id && foodData.seller_city_id) {
                await postCreateFoodItem(jwtToken, foodData);
                
            }else{
                console.error("Food Data not found");
            }

        } catch (error) {
            console.error("Error sending data: ", error);
            console.log(error.response.data);
            throw error;           
        }

        // Reset Form
        setName("");
        setPrice(0);
        setStock(0);
        setDescription("");
        setExpireDate("");
        setPickUpTimeStart("");
        setPickUpTimeEnd("");
        setPhoto("");

        // Refresh Page
        window.location.reload();
    }


    return (
      <>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-primaryGreen hover:bg-secondaryGreen text-white  disabled:opacity-50 disabled:pointer-events-none"
          data-hs-overlay="#hs-vertically-centered-scrollable-modal"
        >
            <p className="hidden md:flex">Tambah</p>
          <Plus size={20} weight="bold" />
        </button>

        {/* Add Item Modals - Start */}
        <div
          id="hs-vertically-centered-scrollable-modal"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <h3 className="font-bold text-fbDark">
                  Tambahkan Barang
                </h3>
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                >
                  <span className="sr-only">Close</span>
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="overflow-y-auto">
                <div className="p-4">
                    <div className="space-y-4">
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Nama Barang <span className="text-red-500">*</span>
                            </label>
                            <input
                                placeholder="Masukkan Nama.."
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            />
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4 ">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Harga Barang <span className="text-red-500">*</span>
                            </label>
                            <div className="flex rounded-lg shadow-sm">
                                <div className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-primaryGreen bg-primaryGreen">
                                    <span className="text-sm text-fbWhite">IDR</span>
                                </div>
                                <div className="px-4 inline-flex items-center min-w-fit border-e-0 border-2 border-neutral-300 bg-gray-50 ">
                                    <span className="text-sm text-gray-500">{formattedPrice}</span>
                                </div>
                                <input
                                    min={1}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    id="hs-leading-multiple-add-on"
                                    name="price"
                                    className="py-3 px-4 h-9 block bg-neutral-50 border-neutral-300 border-2 w-full  text-fbDark p-2 text-sm shadow-sm rounded-lg rounded-s-none focus:z-10 disabled:opacity-50 disabled:pointer-events-none "
                                    placeholder="Masukkan Harga..."
                                />
                            </div>
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Jumlah Stok <span className="text-red-500">*</span>
                            </label>
                            <input
                                min={1}
                                placeholder="Masukkan Jumlah.."
                                type="number"
                                id="stock"
                                name="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            />
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Deskripsi Barang <span className="text-red-500">*</span>
                            </label>
                            <textarea
                            className="rounded-lg w-full  bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            placeholder="Masukkan Deskripsi.."
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            ></textarea>
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Tanggal Kadaluarsa <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="datetime-local"
                                id="expireDate"
                                name="expireDate"
                                value={expireDate}
                                onChange={(e) => setExpireDate(e.target.value)}
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            />
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Dari Jam <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="pickUpTimeStart"
                                name="pickUpTimeStart"
                                value={pickUpTimeStart}
                                onChange={(e) => setPickUpTimeStart(e.target.value)}
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            />
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Sampai Jam <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="pickUpTimeEnd"
                                name="pickUpTimeEnd"
                                value={pickUpTimeEnd}
                                onChange={(e) => setPickUpTimeEnd(e.target.value)}
                                className="rounded-lg w-full h-9 bg-neutral-50 border-neutral-300 border-2  text-fbDark p-2 text-sm"
                            />
                        </div>
                        <div className="input-item flex flex-col gap-2 px-4">
                            <label className="text-fbDark text-sm md:text-md  font-semibold">
                                Upload Foto Barang <span className="text-red-500">*</span>
                            </label>
                            <input  type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    name="foto"
                                    id="foto" 
                                    className="w-full text-sm text-fbDark
                                    file:me-4 file:py-2 file:px-4
                                    file:rounded-2xl file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-primaryGreen file:text-fbWhite
                                    file:transition ease-in-out hover:-translate-y-1 duration-200 cursor-pointer
                                    file:disabled:opacity-50 file:disabled:pointer-events-none"
                                />
                        </div>
                    </div>
                </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                    <button
                        type="submit"
                        className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primaryGreen hover:bg-secondaryGreen text-white  disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Simpan
                    </button>
                    </div>
              </form>
            </div>
          </div>
        </div>

        {/* Add Item Modals - End */}
      </>
    );

}

export default AddFood;