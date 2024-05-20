/* eslint-disable @next/next/no-img-element */
import Image from "next/image";


const LoginForm = () => {
    return (
        <>
            <div className="relative flex flex-col m-6 space-y-8 bg-secondaryGreen bg-opacity-75 rounded-2xl md:flex-row md:space-y-0">
                {/* Bagian Kiri */}
                <div className="relative">
                    <img src="/assets/bg_login2.png" className="w-[400px] h-full hidden rounded-l-2xl md:block object-cover" alt="login_background2" /> 
                </div>
                {/* Bagian Kanan */}
                <div className="flex flex-col justify-center p-8 md:p-14 items-center">
                    <Image className="py-2" src="/assets/logo_login.png" alt="FoodBless Logo" width={48} height={48} />
                    <h1 className="text-fbYellow font-bold text-xl md:text-3xl text-center mb-4">Masuk</h1>
                    <form id="login_form" className="flex flex-col md:w-72">
                        <div className="input-item flex flex-col gap-2 py-2">
                            <label className="text-fbWhite text-sm md:text-md pl-4">Email</label>
                            <input placeholder="Masukkan Email.." type="email" id="email" name="email" className="rounded-2xl h-9 bg-fbWhite text-fbDark p-2 text-sm" />
                        </div>
                        <div className="input-item flex flex-col gap-2 py-2">
                            <label className="text-fbWhite text-sm md:text-md pl-4">Password</label>
                            <div className="relative flex flex-row items-center">
                                <input id="hs-toggle-password" type="password" name="password" className="p-2 w-full text-fbDark rounded-2xl text-sm bg-fbWhite disabled:opacity-50 disabled:pointer-events-none" placeholder="Masukkan Password.."/>
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
                        <button type="submit" className="bg-fbRed my-4 text-fbWhite text-sm md:text-md font-bold rounded-lg p-2 hover:scale-110">Masuk</button>
                        <p className="text-center text-sm text-fbWhite">Belum punya akun? <a className="text-fbYellow" href="/daftar">Daftar</a></p>
                    </form>
                </div>
            </div>
        </>   
    );
}

export default LoginForm;