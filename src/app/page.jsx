"use client";

import { Suspense, useEffect } from "react";
import Loading from "@/app/loading";
import FooterLanding from "@/components/LandingPage/Footer";
import HeroFoodBless from "@/components/LandingPage/Hero";
import JoinUs from "@/components/LandingPage/JoinUs";
import NavbarFoodBless from "@/components/LandingPage/Navbar";
import ReasonsBanner from "@/components/LandingPage/Reasons";
import Why from "@/components/LandingPage/Why";
import useCheckTokenAndRedirect from "@/lib/auth/useCheckTokenAndRedirect";

export default function Home() {
  useCheckTokenAndRedirect("/dashboard", "/");

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
