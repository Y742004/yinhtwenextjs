"use client"

import { Button } from "@nextui-org/react"
import { SideBarCapcut } from "../sidebar"
import { TemplatesNavi } from "../templates/page"
import { VideoIcon } from "@/app/Iconify/videoIcon"
import { ImageIcon } from "@/app/Iconify/imageIcon"

export default function Page() {
    return (
        <>
        <div className="flex">
            <div className="">
                <SideBarCapcut />
            </div>

            <div className="w-full">
                <TemplatesNavi/>
                <Recent/>
            </div>
        </div>
        </>
    )
}

export function Recent() {
    return (
        <>
        <div className="p-5 ">
            <p className="text-2xl font-semibold ">Recent drafts</p>
            <div className="space-y-5   h-screen flex flex-col  justify-center ">
                <div className="flex justify-center">
                <p className="text-gray-500 text-md">No projects yet</p>
                </div>
                <div className="space-x-5 flex justify-center">
                    <Button className="bg-blue-300" startContent={<VideoIcon  size={20} />}>
                        Create video
                    </Button>
                    <Button className="bg-purple-300" startContent={<ImageIcon  size={20} />}>
                        Create image
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}



