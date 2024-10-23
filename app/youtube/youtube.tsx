"use client";
import { Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { DeleteVideo } from "./delete";
import RichTextView from "../components/rich-text-editor/rich-text-view";

export function Youtube() {
  const { isPending, error, data } = useQuery({
    queryKey: ["YoutubeDatas"],
    queryFn: () => fetch("/api/youtube").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className=" grid grid-cols-3 gap-5 p-4  ">
        {data.map((youtube: any) => (
          <div className="">
            <iframe
              className="   "
              src={`https://www.youtube.com/embed/${youtube.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="">Title = {youtube.title}</div>
            {/* <div className=""> Description = {youtube.description}</div> */}
            <div className=""> Description = <RichTextView textData={youtube.description}/></div>

            <DeleteVideo id={youtube.id}/>
            <Link href={`/${youtube.id}`}>Detail</Link>
            <div className="">Title = {youtube.userId}</div>
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(youtube, null, 2)}</code>
        </pre>

          </div>
          
        ))}
      </div>
    </>
  );
}
