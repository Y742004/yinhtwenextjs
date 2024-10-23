"use client";
import { useQuery } from "@tanstack/react-query";
 
import { DeleteLesson } from "./delete-lesson";
import { Avatar, Chip, Divider, Input, LinkIcon } from "@nextui-org/react";
import { SearchIcon } from "../Iconify/searchIcon";
import Link from "next/link";
import { LimitWords } from "./limitWord";

export function Lesson() {
  const { isPending, error, data } = useQuery({
    queryKey: ["lessonDatas"],
    queryFn: () => fetch("/api/lesson").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="grid md:grid-cols-3   gap-3   ">
        {data.map((lesson: any) => (
          <div className="border   rounded-xl p-5   space-y-2  ">
            <iframe
              className="  aspect-video w-full"
              src={`https://www.youtube.com/embed/${lesson.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className=" ">{lesson.title} </div>
            <div className=""> <LimitWords limit={3} words={lesson.description}/></div>
            <DeleteLesson id={lesson.id} />
            <Link href={`/${lesson.id}`}>Go to Detail</Link>
          </div>
        ))}

      </div>
      
    </>
  );
}
