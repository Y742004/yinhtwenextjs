"use client";

import { Image, Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { NavbarDemo } from "../navbar";

export default function Page({ params }: any, {}) {
  const { isPending, error, data } = useQuery({
    queryKey: ["blogData", params.idblogs],
    queryFn: () =>
      fetch(`/api/blog/${params.idblogs}`).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="">
        
        <div className="grid lg:grid-cols-3 gap-5 p-5 mt-10">
     
      <div className="col-span-1 space-y-5">
        <Link href={`/porfolio/blogs`}>
          <p className="text-gray-500 "> Back to Blogs </p>
        </Link>
        <p className="p-2 text-7xl font-bold">{data.title}</p>
      </div>

      <div className="col-span-2 space-y-5 mt-10">
        <Image className="w-screen" src={data.image} />
        <p className="text-2xl fonr-medium">{data.content}</p>
      </div>
    </div></div>
  );
}
