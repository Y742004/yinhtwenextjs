"use client";
import { Button, Input, Link } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CurrentUser } from "../components/user/current-user";
import { signIn, useSession } from "next-auth/react";
import { video } from "framer-motion/client";
import { on } from "events";

export default function CommentBoxLoom({videoId}:any, {userId}:any) {

 
const {isPending, error, data} = useQuery({
  queryKey: ["commentData", videoId],
  queryFn: () => fetch(`/api/comment/current?loomId=${videoId}`).then((res) => res.json()),
})

const {data: data2 } = useQuery({
  queryKey: ["currentUserData"],
  queryFn: () => fetch(`/api/currentuser`).then((res) => res.json()),
})



  const [text, setText] = useState("");
const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      text: string;
      loomId: string;
      userId: string;
    }) => {
      return fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentData"] });}
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({text, loomId:videoId, userId: data2?.id });
  }

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
    <form onSubmit={onSubmit}>
    <div className="flex gap-3 items-center">
        <Input
          label="Comment"
          placeholder="Type your comment"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button color="primary" type="submit">Send</Button>
      </div>
    </form>

    <div className="">
      {data.map((comment: any) => (
        <div className="">
          <p>{comment.text}</p>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(comment, null, 2)}</code>
        </pre>
        </div>
      ))}
    </div>

   
     
    </>
  );
}
