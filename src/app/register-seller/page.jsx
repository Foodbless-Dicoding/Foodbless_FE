import SellerReg from "@/components/Register/SellerReg";

const Page = async() => {
    // Fetch API
    const fetchProvince = await getFoodblessAPI("provinceAll", "");
    const fetchCity = await getFoodblessAPI("cityAll", "");

    // Pointing API data to a correct variable
    const provincies = fetchProvince.provincies;
    const cities = fetchCity.cities;

    return (
        <>
            <div className="register_bg min-h-screen flex items-center justify-center">
                <SellerReg fetchProvince={provincies} fetchCity={cities} />
            </div>
        </>
    );

}
export default Page;