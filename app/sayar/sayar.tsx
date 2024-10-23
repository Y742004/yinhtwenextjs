"use client";
import { Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { DeleteVideo } from "./delete";
import RichTextView from "../components/rich-text-editor/rich-text-view";

export function Sayar() {
  const { isPending, error, data } = useQuery({
    queryKey: ["sayarData"],
    queryFn: () => fetch("/api/sayar").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className=" grid grid-cols-3 gap-5 p-4  ">
        {data.map((sayar: any) => (
          <div className="">
            <iframe
              className="   "
              src={`https://www.youtube.com/embed/${sayar.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="">Title = {sayar.title}</div>
            {/* <div className=""> Description = {sayar.description}</div> */}

            <div className="">
              {" "}
              Description = <RichTextView textData={sayar.description} />
            </div>

            <DeleteVideo id={sayar.id} />
            <Link href={`/sayar/${sayar.id}`}>Detail</Link>
 
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(sayar, null, 2)}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </>
  );
}
