import { Avatar, Button, ButtonGroup, Link, Menu, Tab, Tabs } from "@nextui-org/react";
import { DotsIcon } from "../Iconify/3dots";
import { ShareIcon } from "../Iconify/shareIcon";
import { MenuIcon } from "../Iconify/menuIcon";
import { AddPeopleIcon } from "../Iconify/addPeople";
import { LinkIcon } from "../Iconify/linkIcon";
import { SearchIcon } from "../Iconify/searchIcon";
import { NotificationIcon } from "../Iconify/notificationIcon";

export function NaviBar({title}: {title: string}) {
  return (
    <>
      <div className=" border flex justify-between p-3 ">
        <div className="flex items-center gap-4">
          <MenuIcon size={24} />
         <Link href="/loom/loomMain"> <Avatar
            size="sm"
            src="data:image/png;base64,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"
          /></Link>
          <div className="">
            <p className="text-xl font-semibold">
              {title}
            </p>
            <p className="text-sm text-gray-500">Acc name over 3 years ago</p>
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <ButtonGroup>
            <Button
              startContent={<AddPeopleIcon size={20} />}
              className="border border-gray-400 rounded-l-full bg-white "
            >
              Share
            </Button>
            <Button
              isIconOnly
              className="border border-gray-400 rounded-r-full bg-white "
            >
              <LinkIcon size={20} />
            </Button>
          </ButtonGroup>

          <SearchIcon size={24} />
          <NotificationIcon size={24} />
          <DotsIcon size={24} />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        </div>
      </div>
    </>
  );


  
}


export function Activity () {
  return (
    <>
    <div className="border p-3 ">
      <div className="">
      <Tabs aria-label="Options">
        <Tab key="activity" title="Activity">
         
        </Tab>
        <Tab key="transcript" title="Transcript">
          
        </Tab>
        
      </Tabs>
      </div>
    </div>
    </>
  )
}