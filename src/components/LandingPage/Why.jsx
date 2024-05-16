
const Why = () => {
    return (
        <>
        <section className="w-full h-fit bg-fbYellow pb-8">
            <div className="flex flex-col px-8 py-14 items-center">
                <h1 className="text-fbDark text-center text-xl md:text-2xl lg:text-3xl font-extrabold mt-4 mb-8">Kenapa Memilih <span className="text-primaryGreen">
                    FoodBless?</span></h1>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 font-bold ">
                    <div id="first_why" className="why_item flex flex-col text-center items-center justify-center hover:scale-110 transition ease-in-out duration-300">
                        <h3 className="text-fbWhite text-md w-3/4">Menikmati makanan dengan harga lebih murah.</h3>
                    </div>
                    <div id="sec_why" className="why_item flex flex-col text-center items-center justify-center hover:scale-110 transition ease-in-out duration-300">
                        <h3 className="text-fbWhite text-md w-3/4">
                            Membantu Alam mengurangi limbah makanan.</h3>
                    </div>
                    <div id="thd_why" className="why_item flex flex-col text-center items-center justify-center hover:scale-110 transition ease-in-out duration-300">
                        <h3 className="text-fbWhite text-md w-3/4">
                        Temukan makanan baru lokal terdekat!</h3>
                    </div>
                    <div id="fth_why" className="why_item flex flex-col text-center items-center justify-center hover:scale-110 transition ease-in-out duration-300">
                        <h3 className="text-fbWhite text-md w-3/4">
                        Selamatkan makanan favoritmmu!</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Why;