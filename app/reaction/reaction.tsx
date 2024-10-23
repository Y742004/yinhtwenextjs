"use client";
import { useQuery } from "@tanstack/react-query";
import { DeleteReaciton } from "./delete";
import HahaReaction from "./components/hahaReaction";

export function Reaction({videoId}: any ) {
  const { isPending, error, data } = useQuery({
    queryKey: ["reactionDatas", videoId],
    queryFn: () => fetch(`/api/reaction/current?youtubeId=${videoId}`).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      
      {data.map((reaction: any) => (
        <div className="">
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white"> {JSON.stringify(reaction, null, 2)}</code>
        </pre>
       
          <div className=""> {reaction.type}</div>
          <DeleteReaciton id={reaction.id}/>
         
        </div>
      ))}
    </>
  );
}
