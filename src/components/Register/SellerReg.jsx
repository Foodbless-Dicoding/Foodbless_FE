import Image from "next/image";

const SellerReg = ({fetchProvince, fetchCity}) => {
    return (
        <>
            <div className="flex flex-col items-center m-6 py-2 w-[600px] bg-secondaryGreen bg-opacity-75 rounded-2xl">
                <Image className="py-2 " src="/assets/logo_login.png" alt="FoodBless Logo" width={48} height={48} />
                <h1 className="text-fbYellow font-bold text-xl md:text-2xl text-center mb-4">Daftar Sebagai Seller</h1>
                <form id="cust_register flex flex-col w-full px-4">
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Email</label>
                        <input placeholder="Masukkan Email.." type="email" id="email" name="email" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Username</label>
                        <input placeholder="Masukkan Username.." type="text" id="username" name="username" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Nama Seller</label>
                        <input placeholder="Masukkan Namamu.." type="text" id="name" name="name" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Deskripsi</label>
                        <textarea
                            className="rounded-2xl w-[300px] md:w-[500px]  bg-fbWhite text-fbDark p-2 text-sm"
                            rows="5"
                            placeholder="Tulis deskripsi bisnismu disini.."
                        >
                        </textarea>
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                            <label className="text-fbWhite text-sm md:text-md pl-4">Password</label>
                            <div className="relative flex flex-row items-center">
                                <input max={16} id="hs-toggle-password" type="password" name="password" className="p-2 w-full text-fbDark rounded-2xl text-sm bg-fbWhite disabled:opacity-50 disabled:pointer-events-none" placeholder="Masukkan Password.."/>
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
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Alamat</label>
                        <input placeholder="Masukkan Alamatmu.." type="text" id="address" name="address" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Nomor WA</label>
                        <input placeholder="Dimulai dari angka 62" type="number" id="address" name="address" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Provinsi & Kota</label>
                        <select id="province_id" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm">
                            <option defaultValue="">-- Daftar Provinsi --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select id="city_id" className="rounded-2xl w-[300px] md:w-[500px] h-9 bg-fbWhite text-fbGray p-2 text-sm">
                            <option defaultValue="">-- Daftar Kota Sesuai Provinsi --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="input-item flex flex-col gap-2 py-2">
                        <label className="text-fbWhite text-sm md:text-md pl-4">Upload Foto</label>                    
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input 
                                type="file"
                                name="foto"
                                id="foto" 
                                className="block w-full text-sm text-fbWhite 
                                file:me-4 file:py-2 file:px-4
                                file:rounded-2xl file:border-0
                                file:text-sm file:font-semibold
                                file:bg-fbYellow file:text-fbDark
                                file:hover:bg-fbWhite
                                file:disabled:opacity-50 file:disabled:pointer-events-none
                                "
                            />
                        </label>
                    </div>
                    <button type="submit" className="bg-fbRed my-4 py-4 text-fbWhite text-sm md:text-md w-full font-bold rounded-lg p-2 hover:scale-110">Masuk</button>
                </form>
            </div>
        </>
    );
}

export default SellerReg;