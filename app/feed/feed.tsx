
"use client";
import { useQuery } from "@tanstack/react-query";
import RichTextView from "../components/rich-text-editor/rich-text-view";

export function Feed() {
  const { isPending, error, data } = useQuery({
    queryKey: ["feedData"],
    queryFn: () => fetch("/api/feed").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="grid grid-cols-3   gap-3   ">
        {data.map((feed: any) => (
          <div className="border border-gray-600">
            <div className="border-b border-gray-600 p-3">title={feed.title}</div>
            {/* <div className="">description={feed.description}</div> */}
            
           <RichTextView textData={feed.description}/>
            
            
          </div>
        ))}
      </div>
    </>
  );
}
