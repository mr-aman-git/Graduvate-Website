import React from 'react';
import Image from 'next/image';
import { ArrowRight, Send } from "lucide-react";
const Section_1: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 pb-14">
           
                {/* ----- Right Side Image Placeholder ----- */}
                <div className="">
                    <Image
                        src="/hero/hero.webp"
                        alt="Who We Are"
                        height={600}
                        width={600}
                        className="w-full lg:h-180 "
                    />
                </div>
          
        </section>
    );
};

export default Section_1;