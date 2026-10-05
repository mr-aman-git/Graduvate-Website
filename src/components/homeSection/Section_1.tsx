import React from 'react';
import Image from 'next/image';
import { ArrowRight, Send } from "lucide-react";
const Section_1: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 p-5 md:px-20">
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                
                {/* ----- Right Side Image Placeholder ----- */}
                <div className="">
                    <Image
                        src="/hero/hero.webp"
                        alt="Who We Are"
                        height={600}
                        width={600}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section_1;