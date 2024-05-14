import Image from 'next/image';

const HeroFoodBless = () => {
    return (
        <section className="w-full h-fit bg-secondaryGreen">
            <div className="flex flex-col-reverse md:flex-row px-8 py-14 items-center">
                <div id="left_hero" className="flex flex-col w-full md:w-1/2 items-center md:items-center justify-center">
                    <h1 className="text-4xl font-bold text-fbWhite text-center md:text-center pt-4">
                        Make a <span className="text-fbYellow">Difference</span>
                    </h1>
                    <h1 className="text-4xl font-bold text-fbWhite text-center md:text-center">
                        With <span className="text-fbYellow">Every Bite!</span>
                    </h1>
                    <p className="py-2 text-center md:text-center w-5/6 text-fbWhite text-lg">
                        Jangan biarkan makanan favoritmu menjadi limbah. 
                        <br/> <span className="text-fbYellow font-bold">Foodbless</span> hadir sebagai solusi untuk menyelamatkan makanan tak terjual dari takdir yang pahit.
                    </p>
                </div>
                <div id="right_hero" className="flex flex-col w-full md:w-1/2 items-center">
                    <Image className="shadow-md" src="/assets/hero_img.png" alt="Hero Image" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}

export default HeroFoodBless;
