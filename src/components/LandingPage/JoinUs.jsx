import Link from "next/link";

const JoinUs = () => {
    return(
        <>
            <section className="join_us flex flex-col text-center items-center justify-center">
                <h1 className="text-fbYellow text-xl md:text-3xl font-extrabold">Tunggu Apa Lagi?</h1>
                <h1 className="text-fbRed text-xl md:text-3xl font-extrabold">Ayo Gabung sekarang!</h1>
                <div className="flex flex-col md:flex-row gap-8 pt-6">
                    <button type="button" className="py-4 px-6 flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg  hover:bg-primaryGreen text-fbYellow bg-secondaryGreen disabled:opacity-50 disabled:pointer-events-none transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
                        <Link href="/user-regist">Sebagai Pengguna</Link>
                    </button>
                    <button type="button" className="py-4 px-6 flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg  text-fbYellow border border-fbYellow bg-transparent disabled:opacity-50 disabled:pointer-events-none transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
                        <Link href="/tenant-regist">Sebagai Pemilik Bisnis</Link>
                    </button>
                </div>
            </section>
        </>
    );
}
export default JoinUs;