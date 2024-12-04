"use client";

import { Button, Input } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function Page() {

const {isPending, error, data} = useQuery({
  queryKey: ["blogData"],
  queryFn: () => fetch("/api/blog").then((res) => res.json()),
})

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      image: string;
      title: string;
      content: string;
    }) => {
      return fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogData"] });
    },
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ image, title, content });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="">
        <form className="" onSubmit={onSubmit}>
          <div className="border p-5 grid gap-3">
            <div className="space-y-5">
              <Input
                isRequired
                value={image}
                placeholder="Image URL"
                type="text"
                onChange={(e) => setImage(e.target.value)}
              />
              <Input
                isRequired
                value={title}
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                isRequired
                value={content}
                placeholder="Content"
                type="text"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="">
              <Button type="submit" size="lg" fullWidth color="primary">
                Post
              </Button>
            </div>
          </div>
        </form>


        <div className=" grid grid-cols-3 gap-5 p-5">
          {data.map((blog: any) => (
            <div className="border  p-3 ">
              <div className="space-y-5">
                <img className="w-full h-72" src={blog.image} alt="" />
                <h1 className="text-2xl font-bold">{blog.title}</h1>
               </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
72