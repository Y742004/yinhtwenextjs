"use client";

import { Button, Input } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import RichTextEditor from "../components/rich-text-editor/rich-text-editor";
import { CurrentUser } from "../components/user/current-user";
import { signIn, signOut } from "next-auth/react";
import { Feed } from "./feed";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["currentUserData"],
    queryFn: () => fetch("/api/currentuser").then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (formData: {
      title: string;
      description: string;
      userId: string;
    }) => {
      return fetch("/api/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ title, description, userId: data?.id });
  };

  // const session = await auth();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="p-5">
        <div className="">
          <CurrentUser />
          {/* {JSON.stringify(session)} */}
          <div className="flex gap-3">
            <Button onClick={() => signIn()}>Acc win mal kwar</Button>
            <Button onClick={() => signOut()}>Acc htwat mal kwar</Button>
          </div>
        </div>

        <div className="mt-10">
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
            </div>
            <div className="grid gap-5 mt-10">
             <div className="border border-gray-600 pb-10 px-10 "> <RichTextEditor setDescription={setDescription} />
             </div>
              <Button
                className="bg-blue-500 text-white "
                type="submit"
                size="lg"
                fullWidth
              >
                Submit
              </Button>
            </div>
          </form>
          <div className="mt-20">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}
