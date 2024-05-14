import FooterLanding from "@/components/LandingPage/Footer";
import HeroFoodBless from "@/components/LandingPage/Hero";
import JoinUs from "@/components/LandingPage/JoinUs";
import NavbarFoodBless from "@/components/LandingPage/Navbar";
import ReasonsBanner from "@/components/LandingPage/Reasons";
import Why from "@/components/LandingPage/Why";

export default function Home() {
  return (
    <>
      <NavbarFoodBless />
      <HeroFoodBless />
      <ReasonsBanner/>
      <Why/>
      <JoinUs />
      <FooterLanding />
    </>
  );
}
