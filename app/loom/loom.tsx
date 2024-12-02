"use client";
import { Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
 import RichTextView from "../components/rich-text-editor/rich-text-view";
import { DeleteVideoLoom } from "./delete";

export function Loom() {
  const { isPending, error, data } = useQuery({
    queryKey: ["loomData"],
    queryFn: () => fetch("/api/loom").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
    
      <div className=" grid grid-cols-3 gap-5 p-4  ">
      <Link href={`/loom/loomMain/`}>Go back to Main Page</Link>
        {data.map((loom: any) => (
          <div className="">
            <iframe
              className="   "
              src={`https://www.youtube.com/embed/${loom.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="">Title = {loom.title}</div>
            <DeleteVideoLoom id={loom.id} />
            
             
            {/* <div className="">Title = {loom.userId}</div> */}
            {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(loom, null, 2)}</code>
        </pre> */}

          </div>
          
        ))}
      </div>
    </>
  );
}
