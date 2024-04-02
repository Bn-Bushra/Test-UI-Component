import React from 'react';
import Image from "next/image";

interface HomePageHeroProps {}
export const HomePageHero: React.FC<HomePageHeroProps> = () => {
    return (
        <div className="w-full  text-xs ">
            <div className="max-w-[1440px] p-4 lg:p-9 mx-auto space-y-6">
                <h1 className="font-Omnes text-4xl font-bold text-center">Become a Nana Merchant</h1>
                <div className="flex gap-4 justify-center">
                    <Image
                        priority={true}
                        className="object-contain aspect-[25:16]" src="google-play.svg"
                        alt="Google Play Store"
                        width="120"
                        height="34"
                    />
                    <Image
                        priority={true}
                        className="object-contain aspect-[25:16]" src="app-store1.svg"
                        alt="App Store"
                        width="120"
                        height="34"
                    />
                </div>

            </div>
                <Image
                    priority={true}
                    className="object-cover aspect-[25:16] w-full mt-8"
                    src="/hero-image.png"
                    alt="Hero Image"
                    sizes="100vw"
                    width="0"
                    height='0'
                />
            <div className="p-4 lg:p-9 text-center space-y-6 my-24 max-w-[500px]  mx-auto">
                <h2 className="font-Omnes text-2xl font-bold text-center">Why Deliver with Nana?</h2>
                <p className="font-Omnes text-xl font-bold text-[#707174]">As a Nana Merchant, you can earn money by
                    delivering orders to local customers. You set your own schedule, so you deliver when and where you
                    want. It’s easy to start earning - no previous delivery experience required!</p>
            </div>
        </div>
    )
}