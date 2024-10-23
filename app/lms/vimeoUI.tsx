"use client";
import {
  Avatar,
  Button,
  Chip,
  Divider,
  Image,
  Input,
  Link,
} from "@nextui-org/react";
import { SearchIcon } from "../Iconify/searchIcon";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteLesson } from "../components/delete-lesson";
import { DeleteVimeo } from "../components/d-vimeo";
import { ClockIcon } from "../Iconify/clockIcon";


export function VimeoUI( ) {
  
  
  
  return (
    <>
      <div className="">
        <NavBaVimeo />
        <div className="grid lg:grid-cols-5 gap-5 mx-2 ">
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="mb-2 w-full    ">
              <iframe
                className="aspect-video w-full rounded-xl" 
                src="https://www.youtube.com/embed/vVIPjjdLMn4?si=45K1CEAiTHnnGaaK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              
            </div>

            <DescriptionBox    />
          </div>

          <div className="lg:col-span-2">
            <CommentSection />
          </div>
        </div>
      </div>
    </>
  );
}

export function NavBaVimeo() {
  return (
    <>
      <div className="flex items-center gap-3  pb-5 w-full">
        <Image
          width={100}
          src="data:image/png;base64,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  "
        />

        <Input
          endContent={<SearchIcon size={24} />}
          placeholder="Search videos and more"
          variant="bordered"
          className="max-w-md "
        />

        <Button type="submit">Search</Button>
      </div>
    </>
  );
}

export function DescriptionBox({title, description}: any) {
  return (
    <>
      <div className="p-8 rounded-xl bg-gray-50 border ">
        <div className="mb-5">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <p className="text-gray-500 text-lg">3 views • 2 days ago</p>
        </div>
        <Divider className="mt-3 mb-3" />

        <div className="flex gap-5 ">
          <SearchIcon size={24} />
          <SearchIcon size={24} />
          <p className="flex ap-1">
            <SearchIcon size={24} />
            <span>3</span>
          </p>
          <ClockIcon size={24} />
          <SearchIcon size={24} />
          <SearchIcon size={24} />
        </div>

        <Divider className="mt-3 mb-3" />

        <div className="space-y-5 mt-5 ">
          <div className="flex items-center gap-3">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              size="md"
            />
            <p className="text-lg font-bold ">Yin Htwe</p>
            <Chip className=" bg-blue-500 text-white">Follow</Chip>
          </div>

          <div className="space-y-5">
            <h1 className="text-lg">{description}</h1>
            <h1 className="text-lg text-gray-500">
              Uploaded on Sep 26, 2024 at 12:04 am
            </h1>
            <h1 className="text-lg text-gray-500">#programming</h1>
            <h1 className="text-lg font-bold">Catagories</h1>
            <Link color="foreground" href="#">
              <Chip className="font-bold" variant="flat">
                Branded Content
              </Chip>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function CommentSection() {
  return (
    <>
      <div className=" border rounded-xl bg-gray-50 h-[1000px]   flex flex-col justify-between ">
        <div className="">
          <h1 className="px-8 pt-5 pb-8 text-2xl font-bold">Comments 3</h1>

          <Divider />

          <div className="px-8 py-5">
            <div className="">
              <div className="flex gap-3 items-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  size="md"
                />
                <h1 className="text-lg font-bold">San Lin Htike </h1>
                <p className="text-gray-500 text-lg"> 17 minutes ago</p>
              </div>

              <div className=" space-y-3 pl-14 ">
                <p>Not Bad, Brodie!</p>
                <div className="text-gray-500 font-medium flex gap-5">
                  <p>Reply</p>
                  <p>2 replies</p>
                </div>
              </div>
            </div>

            <div className="pl-6 mt-3 pt-2 border-l-2 ml-14">
              <div className="flex gap-3 items-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  size="md"
                />
                <h1 className="text-lg font-bold">Yin Htwe </h1>
                <p className="text-gray-500 text-lg"> 17 minutes ago</p>
              </div>

              <div className=" space-y-3 pl-14 ">
                <p>Thank you!!</p>
                {/* <div className="text-gray-500 font-medium flex gap-5">
      <p>Reply</p>
      <p>2 replies</p>
    </div> */}
              </div>
            </div>

            <div className="pl-6  pt-5 border-l-2 ml-14">
              <div className="flex gap-3 items-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  size="md"
                />
                <h1 className="text-lg font-bold">Nyi Lin Thant </h1>
                <p className="text-gray-500 text-lg"> 5 minutes ago</p>
              </div>

              <div className=" space-y-3 pl-14 ">
                <p>Mingalarpar Sayar 🙏🏻</p>
                {/* <div className="text-gray-500 font-medium flex gap-5">
      <p>Reply</p>
      <p>2 replies</p>
    </div> */}
              </div>
            </div>
          </div>
        </div>

        <Input
          variant="bordered"
          placeholder="Add a comment..."
          className="mx-auto w-full px-8 pb-8 "
        />
      </div>
    </>
  );
}
