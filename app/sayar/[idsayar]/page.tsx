"use client";
import { useQuery } from "@tanstack/react-query";
import { DescriptionSayar, NaviSayar, OtherVideoSayar } from "../sayarUi";

export default function Page({ params }: any, {}) {
  const { isPending, error, data } = useQuery({
    queryKey: ["sayarData", params.idsayar],
    queryFn: () =>
      fetch(`/api/sayar/${params.idsayar}`).then((res) => res.json()),
  });
  

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <NaviSayar />
      <div className="grid grid-cols-5 mt-5 p-2">
        <div className="col-span-3">
          <iframe
            className="aspect-video w-full "
            width="560"
            height="350"
            src={`https://www.youtube.com/embed/${data.videoId}`}
            
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <DescriptionSayar  title={data.title} description={data.description}/>
          
        </div>
       <div className="col-span-2">
       <OtherVideoSayar />
       </div>
      </div>
    </>
  );
}
