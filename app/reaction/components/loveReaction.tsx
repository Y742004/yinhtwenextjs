"use client"
import { Button, Input } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Reaction } from "../reaction";
 


export default function LoveReaction({type, youtubeId, userId}: {type: string, youtubeId: string, userId: string}) {
    const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
       type: string,
       youtubeId: string,
       userId: string,
    }) => {
      return fetch("/api/reaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reactionDatas"] });
    },
  });
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ type: "Love", youtubeId, userId });
  };

    return (
        <>
        <form onSubmit={onSubmit}>
        
        <Button isIconOnly className="text-xl" type="submit"> ❤️ </Button>
        </form>
       
        
        
        
        </>
    )
}