"use client";

import { Avatar, Button, ButtonGroup, Input, Tab, Tabs } from "@nextui-org/react";
import { SideBarCapcut } from "../sidebar";
import { DesktopIcon } from "@/app/Iconify/desktop";
import { TaskBarIcon } from "@/app/Iconify/taskbarIcon";
import { NotificationIcon } from "@/app/Iconify/notificationIcon";
import { QuestionIcon } from "@/app/Iconify/question";
import { VideoIcon } from "@/app/Iconify/videoIcon";
import { ImageIcon } from "@/app/Iconify/imageIcon";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideBarCapcut />

          
        </div>
        <div className="w-full">
        <TemplatesNavi />
        <TemplatesBanner />
        </div>
      </div>
    </>
  );
}

export function TemplatesNavi() {
  return (
    <>
      <div className="flex justify-end p-5 ">
        {/* <div className="">
          <ButtonGroup className="bg-gray-100 rounded-lg border-2 border-gray-200 ">
            <Button className="bg-gray-100 border-r-2">Video</Button>

            <div className="">
              <Input
                radius="none"
                className="w-full "
                placeholder="Search templates"
              />
            </div>
          </ButtonGroup>
        </div> */}

        <div className="flex gap-3 items-center">
          <Button className=" font-medium bg-purple-400" radius="sm">
            {" "}
            Upgrade
          </Button>
          <Button isIconOnly className="bg-white">
            <DesktopIcon size={24} />
          </Button>
          <Button isIconOnly className="bg-white">
            <TaskBarIcon size={24} />
          </Button>
          <Button isIconOnly className="bg-white">
            <NotificationIcon size={24} />
          </Button>
          <Button isIconOnly className="bg-white">
            <QuestionIcon size={24} />
          </Button>
          <Avatar size="sm" />
        </div>
      </div>
    </>
  );
}

export function TemplatesBanner() {
  return (
    <>
      <div className="p-5">
        <div className="  w-full bg-gradient-to-r from-teal-500 via-teal-100 to-teal-500 flex flex-col gap-3 p-8 rounded-xl">
          <p className="text-4xl font-bold ">Templates </p>
          <p className="text-gray-500 max-w-[550px]">
            CapCuts thousands of free trending templates are just a few clicks
            away. Create stunning videos and images with them effortlessly.
          </p>
                  <div className="">
          <ButtonGroup  className= "  bg-gray-100 rounded-lg border-2 border-gray-200 ">
            <Button className="bg-gray-100 border-r-2">Video</Button>

            <div className="">
              <Input
              fullWidth
                radius="none"
                className="w-full "
                placeholder="Search templates"
              />
            </div>
          </ButtonGroup>
        </div>
        </div>

       <div className="">
       <Tabs variant="underlined"  aria-label="Options">
          <Tab key="video" title="Video">
            
            <div className="grid grid-cols-4  gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>

            </div>
          </Tab>
          <Tab key="image" title="Image">
           <div className="space-y-5">
             <div className="grid grid-cols-4 gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>

            </div>
           </div>
          </Tab>
          
        </Tabs>
       </div>
       
      </div>
    </>
  );
}
