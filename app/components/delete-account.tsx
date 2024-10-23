"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function DeleteAccount({id}: {id: string}) {
  

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { id: string }) => {
      return fetch("/api/account", {
        method: "DELETE",
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
    mutation.mutate({ id });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
         
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded">Delete</button>
      </form>
    </>
  );
}
