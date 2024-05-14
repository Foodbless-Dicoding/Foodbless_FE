import Image from "next/image";

const ReasonsBanner = () => {
    return(
        <>
        <section className="w-full h-fit bg-secondaryGreen">
            <div className="flex flex-col px-8 py-14 items-center">
                <h1 className="text-fbWhite text-center text-xl md:text-2xl lg:text-3xl font-bold mt-4 mb-8">Dampak Dari <span className="text-fbRed">Membuang Makanan</span></h1>
                <div className="flex flex-col md:flex-row px-10 gap-2">
                    <div className="flex flex-col items-center md:w-1/3 hover:scale-110">
                        <Image className="py-4" src="/assets/envi.png" alt="Ilustrasi Lingkungan" width={300} height={200} />
                        <h3 className="text-center items-center text-fbYellow font-bold text-xl ">Lingkungan</h3>
                        <p className="text-fbWhite text-center text-md w-fit pt-2">
                        Limbah makanan bertanggung jawab atas 10% efek dari rumah kaca.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:w-1/3 hover:scale-110">
                        <Image className="py-4" src="/assets/social.png" alt="Ilustrasi Lingkungan" width={300} height={200} />
                        <h3 className="text-center text-fbYellow font-bold text-xl">Sosial</h3>
                        <p className="text-fbWhite text-center text-md w-fit pt-2">
                        Setiap tahun, 
                        sekitar 1.6 miliar ton makanan terbuang sia-sia, yang merupakan sekitar 1/3 dari total produksi makanan global.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:w-1/3 hover:scale-110">
                        <Image className="py-4" src="/assets/economy.png" alt="Ilustrasi Lingkungan" width={300} height={200} />
                        <h3 className="text-center text-fbYellow font-bold text-xl">Ekonomi</h3>
                        <p className="text-fbWhite text-center w-fit pt-2">
                            Setiap warga Indonesia
                            membuang makanan senilai Rp 2,1 juta per tahun.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default ReasonsBanner;