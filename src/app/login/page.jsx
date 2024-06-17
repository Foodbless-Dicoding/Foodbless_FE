"use client";

import LoginForm from "@/components/Login/LoginForm";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";
import { X } from "@phosphor-icons/react";

const Page = () => {
    // Auth Check (WithToken, WithoutToken)
    useCheckTokenAndRedirect();

    // State untuk mengontrol tampilan alert
    const [showAlert, setShowAlert] = useState(true);

    return (
        <>
            <Suspense fallback={<Loading />}>
                {showAlert && (
                    <div className="flex flex-row items-center justify-between bg-fbYellow text-fbDark text-sm w-full p-4" role="alert">
                        <div className="flex flex-row gap-1 w-3/4 text-fbDark">
                            <h4>Ingin akses cepat? Pakai <a target="_blank" href="https://drive.google.com/file/d/1lJDzkc9TJj7_GDYl2BRS6cltXPKpkt2c/view?usp=sharing" className="font-semibold hover:underline">akun demo</a> kami!</h4>
                        </div>
                        <div className="flex flex-row w-[40px]">
                            <button 
                                className="bg-transparent text-fbDark font-bold py-2 px-4"
                                onClick={() => setShowAlert(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                )}
                <div className="login_bg min-h-screen flex items-center justify-center">
                    <LoginForm />
                </div>
            </Suspense>
        </>
    );
}

export default Page;
