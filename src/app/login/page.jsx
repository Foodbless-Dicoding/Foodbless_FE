"use client";

import LoginForm from "@/components/Login/LoginForm";
import { Suspense } from "react";
import Loading from "@/app/loading";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";

const Page = () => {
    
    useCheckTokenAndRedirect();

    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className="login_bg min-h-screen flex items-center justify-center">
                    <LoginForm/>
                </div>
            </Suspense>
        </>
    );
}

export default Page;