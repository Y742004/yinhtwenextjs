"use client";
 
import { CommentSection, DescriptionBox, NavBaVimeo } from "../lms/vimeoUI";
import { Lesson } from "../components/lesson";
import {
  CommentYT,
  DescriptionYT,
  NaviBarYT,
  OtherVideosYT,
} from "../YoutubeUi/youtube";
import AngryReaction from "../reaction/components/angryReaction";
import { Reaction } from "../reaction/reaction";
import HahaReaction from "../reaction/components/hahaReaction";
import LikeReaction from "../reaction/components/likeReaction";
import LoveReaction from "../reaction/components/loveReaction";
import SadReaction from "../reaction/components/sadReaction";
import WowReaction from "../reaction/components/wowReaction";
import RichTextView from "../components/rich-text-editor/rich-text-view";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: any, {}) {
  const { isPending, error, data } = useQuery({
    queryKey: ["lessonData"],
    queryFn: () =>
      fetch(`/api/youtube/${params.idyin}`).then((res) => res.json()),
  });

  const { data: data2 } = useQuery({
    queryKey: ["currentUserData"],
    queryFn: () => fetch(`/api/currentuser`).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {/* <div>
        page - {params.idyin}
        <iframe
          className="  aspect-video w-full"
          src={`https://www.youtube.com/embed/${data.video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1>{data.title}</h1> **** (Dont Forget)
        <h1>{data.description}</h1> ****
        <h1>{data.id}</h1>****
      </div> */}

      {/* <div className="">
        <NavBaVimeo />
        <div className="grid lg:grid-cols-5 gap-5 mx-2 ">
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="mb-2 w-full    ">
              <iframe
                className="aspect-video w-full rounded-xl" 
                src={`https://www.youtube.com/embed/${data.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              
            </div>

            <DescriptionBox title={data.title}  description={data.description}/>
            
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>

          </div>

          <div className="lg:col-span-2">
           
          <CommentSection />
           
          </div>
         
        </div>
        <Lesson/>
      </div> */}

      <NaviBarYT />
      <div className="grid md:grid-cols-5 gap-8 px-5">
        <div className="md:col-span-3 ">
          <div className="mt-5">
            <iframe
              className="aspect-video w-full rounded-xl"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${data.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {" "}
              {JSON.stringify(data2, null, 2)}
            </code>
          </pre>
          <div className="flex gap-3">
            <AngryReaction
              type={"Angry"}
              youtubeId={data.id}
              userId={data2.id}
            />

            <HahaReaction type={"Haha"} youtubeId={data.id} userId={data2.id} />
            <LikeReaction type={"Like"} youtubeId={data.id} userId={data2.id} />
            <LoveReaction type={"Love"} youtubeId={data.id} userId={data2.id} />
            <SadReaction type={"Sad"} youtubeId={data.id} userId={data2.id} />
            <WowReaction type={"Wow"} youtubeId={data.id} userId={data2.id} />
          </div>
          <Reaction videoId={data.id} />

          <DescriptionYT title={data.title} description={data.description} />
          

          {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              
              {JSON.stringify(data, null, 2)}
            </code>
          </pre> */}

          <CommentYT />
        </div>
        <div className="md:col-span-2">
          <OtherVideosYT />
        </div>
      </div>
    </>
  );
}
