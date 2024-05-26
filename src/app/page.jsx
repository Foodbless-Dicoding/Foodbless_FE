"use client";


import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

import FooterLanding from "@/components/LandingPage/Footer";
import HeroFoodBless from "@/components/LandingPage/Hero";
import JoinUs from "@/components/LandingPage/JoinUs";
import NavbarFoodBless from "@/components/LandingPage/Navbar";
import ReasonsBanner from "@/components/LandingPage/Reasons";
import Why from "@/components/LandingPage/Why";


export default function Home() {
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
        <NavbarFoodBless />
        <HeroFoodBless />
        <ReasonsBanner />
        <Why />
        <JoinUs />
        <FooterLanding />
      </Suspense>
    </>
  );
}
