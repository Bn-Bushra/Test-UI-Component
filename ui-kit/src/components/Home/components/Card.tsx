import React from 'react';
import Image from "next/image";

interface HomePageCardProps {}
export const HomePageCard: React.FC<HomePageCardProps> = () => {
    return (
        <div className="rounded-2xl bg-[#F5FBFE] p-4 w-full md:w-fit h-[400px]">
            <Image
                priority={true}
                className="object-contain aspect-[25:16] w-full rounded-2xl"
                src="/hero-image.png"
                alt="Hero Image"
                sizes="100vw"
                width="0"
                height='0'
            />
            <div className="text-center flex flex-col gap-2 mt-5">
                <h3 className="text-2xl font-bold font-Omnes">Competitive Earnings</h3>
                <ul>
                    <li>The more you deliver, the more money you get</li>
                    <li>Get paid per delivery</li>
                </ul>
            </div>
        </div>
    )}