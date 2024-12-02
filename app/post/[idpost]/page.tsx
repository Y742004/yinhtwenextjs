"use client";

import { Avatar } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import CommentBoxPost from "../comment";

export default function Page({ params }: any, {}) {
    const { isPending, error, data } = useQuery({
        queryKey: ["postData", params.idpost],
        queryFn: () =>
          fetch(`/api/post/${params.idpost}`).then((res) => res.json()),
      });
    
      
      
    
      if (isPending) return "Loading...";
    
      if (error) return "An error has occurred: " + error.message;
    
    return (
        <>
       <div className="p-5">
       <div className="border rounded-xl p-5">
          <div className="flex gap-2 items-center">
            <Avatar />
            <div className="">
              <p className="font-bold text-md">Yin Htwe</p>
              <p className="text-gray-500 text-sm"> 8 hours ago</p>
            </div>
          </div>
          <div className="mt-5">{data.content}</div>
  
          {/* <LoveReaction type="Love" youtubeId="" userId={data2?.id} />
  */}
        <CommentBoxPost contentId={params.idpost}   />
        </div>
       </div>
        </>
    )
}