"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function CreateUser() {
  const [email, setEmail] = useState("");

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { email: string }) => {
      return fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["repoData"] });
    }
  });

 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ email });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}
