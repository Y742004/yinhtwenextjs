"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function CreateContent() {
  const [description, setDescription] = useState("");

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { description: string }) => {
      return fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["contentData"] });
    }
  });

 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ description });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
        className="border bg-blue-300"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
