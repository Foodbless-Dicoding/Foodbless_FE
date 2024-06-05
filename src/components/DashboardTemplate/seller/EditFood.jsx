"use client";
import { UserList } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { putUpdateFoodItem } from "@/data/api-endpoint";

const EditFood = ({jwtToken, foodData}) => {
    console.log(foodData);


    // useState for Default Value
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [pickUpTimeStart, setPickUpTimeStart] = useState("");
    const [pickUpTimeEnd, setPickUpTimeEnd] = useState("");
    const [photo, setPhoto] = useState("");

    // Money IDR Formatter
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(price ? parseFloat(price) : 0);

    // Photo Handler
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]); // Store the selected file
    };

    // useEffect for default value
    useEffect(() => {
        if (foodData) {
            setName(foodData.name || "");
            setPrice(foodData.price || 0);
            setStock(foodData.stock || 0);
            setDescription(foodData.description || "");
            setExpireDate(foodData.expireDate || "");
            setPickUpTimeStart(foodData.pickUpTimeStart || "");
            setPickUpTimeEnd(foodData.pickUpTimeEnd || "");
  
        }
    }, [foodData])


    // Fungsi untuk Submit Form
    const handleSubmit = async(e) => {
        e.preventDefault();
        const updateData = {
            id : foodData.id,
            seller_id : foodData.seller_id,
            name : name,
            price : price,
            stock : stock,
            status: foodData.status,
            description : description,
            expireDate : expireDate,
            pickUpTimeStart : pickUpTimeStart,
            pickUpTimeEnd : pickUpTimeEnd,
            photo : photo
        };

        try {
            if (jwtToken && updateData) {
                await putUpdateFoodItem(jwtToken, updateData);
                console.log("Data Updated: ", updateData);
            }
        } catch (error) {
            console.error("Error updating data: ", error);      
        }

        // Redirect to Penjualan Page
        window.location.replace("/dashboard/seller/penjualan");
    }

    return(
        <>
            <section className="flex flex-col w-full rounded-lg px-4 py-6 bg-neutral-50">
                <div className="titleWrap flex flex-row gap-4 px-4 text-primaryGreen items-center">
                    <UserList weight="bold" size={24} />
                    <h2 className="text-lg font-semibold "><span className="font-bold">Edit: </span> {foodData.name}</h2>
                </div>
                <hr className="border-neutral-300 mx-4 mt-2 border-[1.5px]" />
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="input-item flex flex-col pt-2 px-4">
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
                    <div className="input-item flex flex-col py-2 px-4 ">
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
                    <div className="input-item flex flex-col py-2 px-4">
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
                            Perbarui Foto Barang <span className="text-red-500">*</span>
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
                    <button className="py-2 justify-center mt-4 px-6 w-full inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primaryGreen hover:bg-secondaryGreen text-white  disabled:opacity-50 disabled:pointer-events-none" 
                    type="submit">
                        <p>Update </p>
                    </button>
                </form>             
            </section>
        </>
    );

}

export default EditFood;