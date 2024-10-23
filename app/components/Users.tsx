"use client";
import { useQuery } from "@tanstack/react-query";
 
export function Users() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("/api").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="">
        <ul>
          {data.map((user: any) => (
            <li>
              {user.email}  
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
