"use client";

import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export function DeleteVideoLoom({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {  id: string }) => {
      return fetch("/api/loom", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loomData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ id });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Button type="submit">Delete</Button>
      </form>
    </>
  );
}
