"use client"
import { Button, Input } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Reaction } from "./reaction";
import { DeleteReaciton } from "./delete";
import HahaReaction from "./components/hahaReaction";
import LoveReaction from "./components/loveReaction";
import LikeReaction from "./components/likeReaction";
import WowReaction from "./components/wowReaction";
import SadReaction from "./components/sadReaction";
import AngryReaction from "./components/angryReaction";
import { SayarUi } from "../sayar/sayarUi";

export default function Page() {
  //   const [type, setType] = useState("");
  //   const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: (formData: {
  //      type: string
  //   }) => {
  //     return fetch("/Api/reaction", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["reactionDatas"] });
  //   },
  // });
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   mutation.mutate({ type: "Love" });
  // };

    return (
        <>
        {/* <form onSubmit={onSubmit}>
        
        <Button type="submit">Submit</Button>
        </form> */}


       <div className=" grid grid-cols-6 gap-2">
        
       <AngryReaction type={"Angry"} youtubeId={""} userId={""}/>
       </div>
        <Reaction  />


        
        </>
    )
}