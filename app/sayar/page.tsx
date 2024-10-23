"use client";

import { Button, Input } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Sayar } from "./sayar";
import RichTextEditor from "../components/rich-text-editor/rich-text-editor";
import { CurrentUser } from "../components/user/current-user";
import { SignIn } from "../components/signin-signout-form/sign-in";
import { Sign } from "crypto";
import { SignOut } from "../components/signin-signout-form/sign-out";
import { signIn, signOut } from "next-auth/react";
import { auth } from "@/auth";

export default  function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoId, setVideoId] = useState("");

  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["currentUserData"],
    queryFn: () => fetch("/api/currentuser").then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (formData: {
      title: string;
      description: string;
      videoId: string;
      userId: string;
    }) => {
      return fetch("/api/sayar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sayarData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ title, description, videoId, userId : data?.id });
  };

  // const session = await auth();

  if (isPending) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  return (
    <>
<CurrentUser/>
{/* {JSON.stringify(session)} */}
<Button onClick={() => signIn()} >Acc win mal kwar</Button>
<Button onClick={() => signOut()} >Acc htwat mal kwar</Button>



      <div className="">
       
        <form className="" onSubmit={onSubmit}>
          <div className=" flex gap-3">
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
              label="Description"
              value={description}
              placeholder="Enter your Description"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <RichTextEditor setDescription={setDescription}/>

            <Input
              isRequired
              label="Video"
              value={videoId}
              placeholder="Enter your Video"
              type="text"
              onChange={(e) => setVideoId(e.target.value)}
            />
          </div>

         
          <Button type="submit" size="lg" fullWidth  >
              Submit
            </Button>
          
        </form>

        <Sayar/>
         
       
      </div>
    </>
  );
}
