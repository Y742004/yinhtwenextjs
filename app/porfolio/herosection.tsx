import { Button } from "@nextui-org/react";

export function HeroSection() {
    return (
        <>
        <div className="mt-32 w-full ">
            <div className=" py-20 px-10  ">
                <h1 className="text-6xl font-semibold text-center">This is for the content of the hero section</h1>
          <div className="mt-10 text-center">
          <Button className="bg-teal-500 text-white"  size="lg">Click Here</Button>
          </div>
           
            </div>
        </div>
        </>
    )
}