"use client";

import { Image, Tab, Tabs } from "@nextui-org/react";
import { SideBarCapcut } from "../sidebar";
import { TemplatesNavi } from "../templates/page";

export default function Page() {
  return (
    <>
      <div className="flex ">
        <div className="">
          <SideBarCapcut />
        </div>
        <div className="w-full">
          <TemplatesNavi />
          <MagicTab />
        </div>
      </div>
    </>
  );
}

export function MagicTab() {
  return (
    <>
      <div className="p-5">
        <Tabs variant="underlined"  aria-label="Options">
          <Tab key="all" title="All">
            
            <div className="grid grid-cols-3  gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>

            </div>
          </Tab>
          <Tab key="trending" title="Trending">
           <div className="space-y-5">
           <p className="font-medium">Trending</p>
            <div className="grid grid-cols-3 gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              

            </div>
           </div>
          </Tab>
          <Tab key="createmax-withai" title="Create max-with AI">
          <div className="space-y-5">
           <p className="font-medium">Create max-with AI</p>
            <div className="grid grid-cols-3 gap-5">
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

          <Tab key="forvideos" title="For videos">
          <div className="space-y-5">
           <p className="font-medium">For videos</p>
            <div className="grid grid-cols-3 gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
               

            </div>
           </div>
          </Tab>

          <Tab key="forimages" title="For images">
          <div className="space-y-5">
           <p className="font-medium">For images</p>
            <div className="grid grid-cols-3 gap-5">
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>

              

            </div>
           </div>
          </Tab>

          <Tab key="forbusiness" title="For business">
          <div className="space-y-5">
           <p className="font-medium">For business</p>
            <div className="grid grid-cols-3 gap-5">
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
    </>
  );
}
