"use client";

import { Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { NavbarDemo } from "../navbar";

export default function Blog() {
  const { isPending, error, data } = useQuery({
    queryKey: ["blogData"],
    queryFn: () => fetch("/api/blog").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
        
      <Link color="foreground" href={`/porfolio`}>
        <p className="p-5 text-gray-500">Back to main</p>
      </Link>

      {/* <div className=" grid grid-cols-3 gap-5 p-5">
          {data.map((blog: any) => (
          <Link  color="foreground" href={`/porfolio/${blog.id}`} > <div className="border  p-3 ">
              <div className="space-y-5">
                <img className="w-full h-72" src={blog.image} alt="" />
                <h1 className="text-2xl font-bold">{blog.title}</h1>
               </div>
            </div></Link> 
          ))}
        </div> */}

      <div className=" grid grid-cols-3 gap-5 p-5 mt-10">
        {data.map((blog: any) => (
          <Link color="foreground" className="border inline-block  p-3" href={`/porfolio/${blog.id}`}>
            <div className=" ">
              <div className="space-y-5">
                <img className="w-full h-72 " src={blog.image} alt="" />
                <h1 className="text-2xl font-bold">{blog.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
