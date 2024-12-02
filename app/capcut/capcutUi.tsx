import {
  Avatar,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { NotificationIcon } from "../Iconify/notificationIcon";
import { DesktopIcon } from "../Iconify/desktop";
import { TaskBarIcon } from "../Iconify/taskbarIcon";
import { QuestionIcon } from "../Iconify/question";
import { HomeIcon } from "../Iconify/homeIcon";
import { VideoIcon } from "../Iconify/videoIcon";
import { ImageIcon } from "../Iconify/imageIcon";

export function CapcutUi() {
  return (
    <>
      <div className="">
        <NaviCapcut />
        <BannerCapcut />
        <OtherOptions />
      </div>
    </>
  );
}

export function NaviCapcut() {
  return (
    <>
      <div className="flex justify-between p-5">
        <div className="">
          <ButtonGroup className="bg-gray-100 rounded-lg border-2 border-gray-200 ">
            <Dropdown>
              <DropdownTrigger>
                <Button className="bg-gray-100 border-r-2">Video</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="video"> Video</DropdownItem>
                <DropdownItem key="image">Image</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div className="">
              <Input
                radius="none"
                className="w-full "
                placeholder="Search templates"
              />
            </div>
          </ButtonGroup>
        </div>

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

export function BannerCapcut() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="  w-full bg-gradient-to-r from-teal-500 via-teal-100 to-teal-500 flex flex-col items-center py-14 rounded-xl">
          <p className="text-4xl font-bold ">
            What can we help you create today?
          </p>
          <p className="text-gray-500">
            Starting with a blank space, ready templates, or sone AI magic, you
            choose.
          </p>
        </div>
        <div className="w- full flex justify-center -mt-8">
          <ButtonGroup size="lg" className="border rounded-xl">
            <Button className="bg-white ">
              <div className="grid justify-items-center">
                <div className="">
                  <VideoIcon size={24} />
                </div>{" "}
                <div className="text-sm">Video</div>
              </div>{" "}
            </Button>
            <Button className="bg-white ">
              <div className="grid justify-items-center">
                <div className="">
                  <ImageIcon size={24} />
                </div>{" "}
                <div className="text-sm">Image</div>
              </div>{" "}
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export function OtherOptions() {
  return (
    <>
      <div className="p-5 grid gap-3">
        <div className="">
          <p className="font-semibold">You may want to try</p>
        </div>

        <div className="flex gap-5  p-2 w-[1200px] overflow-scroll">
          <div className="space-y-1">
            <div className="w-64 h-32 bg-gray-300 rounded-lg"></div>
            <p className="text-sm">New Video</p>
          </div>

          <div className="space-y-1">
            <div className="w-64 h-32 bg-gray-300 rounded-lg"></div>
            <p className="text-sm">Clip to Video</p>
          </div>

          <div className="space-y-1">
            <div className="w-64 h-32 bg-gray-300 rounded-lg"></div>
            <p className="text-sm">Script to Video</p>
          </div>

          <div className="space-y-1">
            <div className="w-64 h-32 bg-gray-300 rounded-lg"></div>
            <p className="text-sm">Long video to short</p>
          </div>

          <div className="space-y-1">
            <div className="w-64 h-32 bg-gray-300 rounded-lg"></div>
            <p className="text-sm">One-click video creation</p>
          </div>
        </div>
        <p className="text-2xl font-semibold">Start with templates</p>

<div className="">
<Tabs variant="bordered"  aria-label="Options">
          <Tab key="foryou" title="For You">
            
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
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
              <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>


            </div>
          </Tab>
          <Tab key="newyear" title="New Year">
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
          <Tab key="hot" title="Hot">
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

      <div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>
<div className="max-w-72 h-56 bg-gray-300 rounded-lg"></div>


            </div>
           </div>
          </Tab>

          <Tab key="business" title="Business">
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


               

            </div>
           </div>
          </Tab>

          <Tab key="editorpick" title="Editor's pick">
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


              

            </div>
           </div>
          </Tab>

          <Tab key="logoreveal" title="Logo reveal">
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

              

            </div>
           </div>
          </Tab>
        </Tabs>
</div>

      </div>
    </>
  );
}
