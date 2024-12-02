 "use client";
import { Button, Input, Link } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
 import { Loom } from "./loom";
import { CurrentUser } from "../components/user/current-user";
import { signIn } from "next-auth/react";

export default function Page () {
    const [title, setTitle] = useState("");
     const [videoId, setVideoId] = useState("");
    

    const queryClient = useQueryClient();
    const { isPending, error, data } = useQuery({
      queryKey: ["currentUserDatas"],
      queryFn: () => fetch("/api/currentuser").then((res) => res.json()),
    });

  const mutation = useMutation({
    mutationFn: (formData: {
      title: string;
       videoId: string;
      userId: string;

    }) => {
      return fetch("/api/loom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loomData"] });
    },
  });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutation.mutate({ title, videoId, userId: data?.id });
        
      };

      if (isPending) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;

    return (
        <>
        <CurrentUser/>
        <Button onClick={() => signIn()} >Acc win ml kwar</Button>
        <div className="">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
             
           <div className="flex gap-3">
           <Input
              isRequired
              label="Title"
              value={title}
              placeholder="Enter your Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            
            
             <Input
              isRequired
              label="Video"
              value={videoId}
              placeholder="Enter your Video"
              type="text"
              onChange={(e) => setVideoId(e.target.value)}
            />
           </div>
            
            <div className="flex gap-2 justify-end">
              <Button type="submit" size="lg" fullWidth color="primary">
                Submit
              </Button>
            </div>
          </form>
          
          <Loom/>
         </div>

        </>
    )
}