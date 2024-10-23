"use client";
import { useQuery } from "@tanstack/react-query";
import { DeleteContent } from "./delete-content";

export function Content() {
  const { isPending, error, data } = useQuery({
    queryKey: ["contentData"],
    queryFn: () => fetch("/api/content").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="">
        <ul>
          {data.map((content: any) => (
            <li>{content.description} <DeleteContent id ={content.id}/></li>
          ))}
        </ul>
      </div>
    </>
  );
}
