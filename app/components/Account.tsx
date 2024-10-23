"use client";
import { useQuery } from "@tanstack/react-query";
 
import { DeleteAccount } from "./delete-account";

export function Account() {
  const { isPending, error, data } = useQuery({
    queryKey: ["accountData"],
    queryFn: () => fetch("/api/account").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="">
        <ul>
          {data.map((account: any) => (
            <li>
              {account.name} <DeleteAccount id={account.id} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
