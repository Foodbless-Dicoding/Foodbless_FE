"use client";

import LoginForm from "@/components/Login/LoginForm";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

const Page = () => {

    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
  
      if (token) {
        router.push("/dashboard");
      }
    }, [router]);
    
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