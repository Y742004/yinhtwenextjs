"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function CreateAccount() {
  const [name, setName] = useState("");

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { name: string }) => {
      return fetch("/api/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["accountData"] });
    }
  });

 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ name });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
        className="bg-green-400"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
}
