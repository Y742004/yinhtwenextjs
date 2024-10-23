"use client";
import { Button, Input, LinkIcon } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { Lesson } from "../components/lesson";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      title: string;
      description: string;
      video: string;
    }) => {
      return fetch("/api/lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessonDatas"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ title, description, video });
  };
  return (
    <>
   <div className="p-5 mt-5">

   <div className="max-w-sm mx-auto mb-10">
        <div className="border p-5 rounded ">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <h1 className="text-xl font-bold ">Create</h1>
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
             <Input
              isRequired
              label="Video"
              value={video}
              placeholder="Enter your Video"
              type="text"
              onChange={(e) => setVideo(e.target.value)}
            />
            <p className="text-center text-small">
              Need to create an account? <Link href="#">Sign up</Link>
            </p>
            <div className="flex gap-2 justify-end">
              <Button type="submit" size="lg" fullWidth color="primary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Lesson/>
       
   </div>
    </>
  );
}
