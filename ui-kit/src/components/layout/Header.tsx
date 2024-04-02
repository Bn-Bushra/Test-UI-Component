import React from 'react';
import Image from "next/image";

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
return (
    <div className="w-full lg:max-w-[1440px] p-4 lg:p-9 bg-white dark:text-white">
        <div className="flex justify-between items-center">
            <div>
                <Image
                    // fill={true}
                    priority={true}
                    className="object-contain aspect-[25:16]" src="/logo-blue.png"
                    alt="Nana Food delivery logo"
                    width="62"
                    height="34"
                />
            </div>
            <div className="hidden lg:flex ">
                <ul className="flex gap-4 text-xs font-bold">
                    <li>For Couriers</li>
                    <li>For Merchants</li>
                    <li>For Nana for Work</li>
                    <li>Nana Drive</li>
                </ul>
            </div>
            <div className="lg:hidden flex items-center gap-2">
                <div className="hidden md:flex text-xs font-bold ">
                    <p>Courier</p>
                </div>
                <Image
                    priority={true}
                    className="object-contain"
                    src="/hamburger.svg"
                    alt="Harmburger logo"
                    width="24"
                    height="24"
                />
            </div>
            <div className="hidden lg:flex text-xs font-bold">
                <p>Jobs</p>
            </div>
        </div>

    </div>
)
}