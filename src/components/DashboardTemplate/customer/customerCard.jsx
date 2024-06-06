/* eslint-disable @next/next/no-img-element */
"use client";


const CustomerCard = ({foodData}) => {

    // Utilities Functions
    const truncateWords = (str, numWords) => {
        if (!str) return "";
        const words = str.split(" ");
        if (words.length <= numWords) return str;
        return words.slice(0, numWords).join(" ") + "...";
    };

    // change to IDR format
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(foodData.price ? parseFloat(foodData.price) : 0);

    return (
        <>
        <a className="flex flex-col rounded-xl bg-fbWhite w-full hover:shadow-md transition" href="">
            <section>
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[70%] rounded-t-xl overflow-hidden">
                    <img
                        className="size-full absolute top-0 start-0 object-cover rounded-t-xl"
                        src={foodData.photo}
                        alt="Image of Food"
                    />
                </div>
            </section>
            {/* Card Content */}
            <div className="p-4">
                <h3 className="font-bold text-xl text-primaryGreen">{truncateWords(foodData.name, 3)}</h3>
                <p className="font-bold text-lg text-fbDark">{formattedPrice}</p>
                

            </div>
        </a>
        
        
        </>
    );

}

export default CustomerCard;