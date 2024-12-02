import { Avatar, Divider } from "@nextui-org/react";
import { BookMarkIcon } from "../Iconify/bookmarkIcon";
import { ClockIcon } from "../Iconify/clockIcon";
import { HomeIcon } from "../Iconify/homeIcon";
import { NotificationIcon } from "../Iconify/notificationIcon";
import { SettingIcon } from "../Iconify/settingIcon";
import { VideoLibraryIcon } from "../Iconify/videoLibrary";
import Link from "next/link";
import { SearchIcon } from "../Iconify/searchIcon";
import { PlusIcon } from "../Iconify/plusIcon";
import { TemplateIcon } from "../Iconify/templateIcon";
import { ShareIcon } from "../Iconify/shareIcon";
import { MagicWandIcon } from "../Iconify/magicWandIcon";

export function SideBarCapcut() {
  return (
    <>
     <div className="">
     <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src=" data:image/png;base64,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"
              className="h-6 me-3 sm:h-7"
              alt="Capcut Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              CapCut
            </span>
          </a>

          <div className=""></div>

          
            <div className="my-3 mt-10">
            <a
                href="#"
                className="bg-teal-400 hover:bg-aqua-700 text-black font-medium flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PlusIcon size={24} />
                <span className="ms-3">Create new</span>
              </a>
            </div>
            

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/capcut"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon size={24} />
                <span className="ms-3">Start</span>
              </a>
            </li>
            <li>
              <a
                href="/capcut/templates"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TemplateIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Templates{" "}
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span> */}
              </a>
            </li>
            <li>
              <a
                href="/capcut/recent"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ClockIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Recent drafts
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-500 rounded-full ">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="/capcut/share"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ShareIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Share and schedule{" "}
                </span>
              </a>
            </li>
            <li>
              <a
                href="/capcut/magic"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MagicWandIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Magic tools
                </span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SettingIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li> */}
          </ul>
          <div className="grid gap-8 mt-10">
            <Divider />
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-md text-gray-500">Spaces</p>
                {/* <p className="text-lg">+</p> */}
              </div>{" "}
              <div className=" flex gap-4 items-center">
                <Avatar
                  className="bg-purple-600 text-white text-lg"
                  name="Y"
                  size="sm"
                  radius="sm"
                />
                <p className="font-bold text-md">Yin Htwe915's space</p>
              </div>{" "}
              <div className=" flex gap-3 items-center">
                <Avatar
                  className="text-lg text-white bg-gray-400"
                  name="+"
                  size="sm"
                  radius="sm"
                />
                <p className="font-bold text-md">Create new space</p>
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </aside>
     </div>
    </>
  );
}
