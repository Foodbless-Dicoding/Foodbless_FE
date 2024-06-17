import Image from "next/image";

const FooterLanding = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="landing_footer flex flex-row items-center px-8 justify-between bg-primaryGreen">
                <Image src="/Assets/footer_logo.png" alt="FoodBless Logo" width={180} height={50} />
                <p className="text-fbWhite text-sm">© {currentYear} - By FoodBless Team </p>
            </footer>
        </>
    );
}

export default FooterLanding;
