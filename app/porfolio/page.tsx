"use client";

import { Footer } from "./footer";
import { HeroSection } from "./herosection";
import { NavbarDemo } from "./navbar"
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";
import { Section4 } from "./section4";
import { Skills } from "./ui/skills";

export default function Page() {
    return (
        <>
         <div className="bg-gray-100 py-3 px-5 ">
              
           <NavbarDemo/>
           <HeroSection/>
           <Section1/>
           <Section2/>
           <Section3/>
           <Skills/>
           <Section4/>
           <Footer/>
         </div>
        </>
    )
}