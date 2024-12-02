"use client";
import { useQuery } from "@tanstack/react-query";
import { Activity, NaviBar } from "../loomDetailUi";
import CommentBoxLoom from "../Comment";
  
export default function Page({ params }: any, {}) {
  const { isPending, error, data } = useQuery({
    queryKey: ["loomData", params.idloom],
    queryFn: () =>
      fetch(`/api/loom/${params.idloom}`).then((res) => res.json()),
  });

  
  

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <NaviBar title={data.title}/>
      <div className="p-5 flex gap-2">
      <iframe
            className="aspect-video w-full "
             height="450"
            src={`https://www.youtube.com/embed/${data.videoId}`}
            
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

       
       </div>
       <CommentBoxLoom videoId={data.id}  />
        

       
    </>
  );
}
