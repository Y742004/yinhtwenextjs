"use client";
import { useQuery } from "@tanstack/react-query";
 
import { DeleteLesson } from "./delete-lesson";
import { Avatar, Chip, Divider, Input, LinkIcon } from "@nextui-org/react";
import { SearchIcon } from "../Iconify/searchIcon";
import Link from "next/link";
import { LimitWords } from "./limitWord";
import { u } from "framer-motion/client";

export function LoginUser() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userDatas"],
    queryFn: () => fetch("/api/user").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="grid md:grid-cols-3   gap-3   ">
        {data.map((user: any) => (
          <div className="border   rounded-xl p-5   space-y-2  ">
            
            <div className=" ">{user.email} </div>
            <div className="">  {user.password}</div>
            <DeleteLesson id={user.id} />
            
          </div>
        ))}

      </div>
      
    </>
  );
}
