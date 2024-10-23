"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function DeleteContent({id}: {id: string}) {
  

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { id: string }) => {
      return fetch("/api/content", {
        method: "DELETE",
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
    mutation.mutate({ id });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        
        <button>Delete</button>
      </form>
    </>
  );
}
