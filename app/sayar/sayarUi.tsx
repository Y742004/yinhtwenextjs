"use client";

import { data } from "framer-motion/client";
import { SideBar } from "./sideBar";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import RichTextView from "../components/rich-text-editor/rich-text-view";

export function SayarUi() {
  return (
    <>
      <NaviSayar />

      <div className="flex">
        <SideBar />
        <div className="">
          <iframe
            className="aspect-video w-full rounded-none px-5 mt-5 "
            src="https://www.youtube.com/embed/8bbTtPL1jRs?si=RCarayC9aBG_ofzC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          
          <div className="p-3">
            <div className="grid lg:grid-cols-7">
              <div className="lg:col-span-5">
                <DescriptionSayar />
              </div>
              <div className="lg:col-span-2">
                <OtherVideoSayar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function NaviSayar() {
  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-3xl border border-r-1  border-black border-t-2 border-b-2 border-l-2 rounded-none p-2 w-2/12">
          LMS.wtf
        </h1>
        <p className="font-semibold text-xl border border-black border-l-1 border-t-2 border-b-2 border-r-2 rounded-none p-2 w-10/12">
          Dashboard
        </p>
      </div>
    </>
  );
}

export function DescriptionSayar({ title, description }: any) {
  return (
    <>
      <div className="mt-5">
        <p className="text-2xl font-bold ">{title}</p>
        {/* <p className="text-lg text-gray-600 mt-3">{description}</p> */}
        <RichTextView textData={description} />
      </div>
    </>
  );
}

export function OtherVideoSayar() {
  const { isPending, error, data } = useQuery({
    queryKey: ["sayarData"],
    queryFn: () => fetch("/api/sayar").then((res) => res.json()),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const videos = Array.isArray(data) ? data : [data];

  return (
    <>
      <div className="grid ">
        {/* <div className="text-xl font-bold">Other Videos</div> */}

        {videos.map((item: any) => (
          <Link href={`/sayar/${item.id}`}>
            <div className="flex gap-2    h-28 p-2  ">
              <div className=" ">
                <iframe
                  className="aspect-video rounded-lg"
                  width="200"
                  height="100"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="">
                <h1 className="text-md font-semibold">{item.title}</h1>
                <p className="text-sm text-gray-500">Acc name</p>
                <p className="text-sm text-gray-500">13M views • 2 days ago</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
