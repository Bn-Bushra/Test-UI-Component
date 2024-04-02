import React from 'react';
import Image from "next/image";

interface FooterProps {}
export const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="w-full  bg-[#1E1E1E] p-4 lg:p-9  text-white text-xs">
            <div className="max-w-[1440px] mx-auto space-y-6">
                <Image
                    priority={true}
                    className="object-contain aspect-[25:16]" src="/logo-white.png"
                    alt="Nana Food delivery logo"
                    width="62"
                    height="34"
                />
                <div className="flex gap-4 justify-start">
                    <Image
                        priority={true}
                        className="object-contain aspect-[25:16]" src="/google-play.svg"
                        alt="Google Play Store"
                        width="120"
                        height="34"
                    />
                    <Image
                        priority={true}
                        className="object-contain aspect-[25:16]" src="/app-store1.svg"
                        alt="App Store"
                        width="120"
                        height="34"
                    />
                </div>
                {/*Links Columns*/}
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex justify-between items-center">
                        <p>Partner with Nana</p>
                        <img src="/dropdown.svg"></img>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Company</p>
                        <img src="/dropdown.svg"></img>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Products</p>
                        <img src="/dropdown.svg"></img>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Useful Links</p>
                        <img src="/dropdown.svg"></img>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Follow Us</p>
                        <img src="/dropdown.svg"></img>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-4">
                    <ul className="flex gap-2 md:gap-4">
                        <li>Kano</li>
                        <li>English</li>
                        <li>Light</li>
                        <li>Accessibility</li>
                    </ul>
                    <p>(c)Nana 2018-2024</p>
                </div>
            </div>
        </div>
    )}