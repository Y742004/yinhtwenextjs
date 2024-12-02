"use client";

import { CapcutUi } from "./capcutUi";
import { SideBarCapcut } from "./sidebar";

export default function Page() {
  return (
    <>
      <div className="flex ">
        <div className="">
          <SideBarCapcut />
        </div>
        <div className="w-full">
          {" "}
          <CapcutUi />
        </div>
      </div>
    </>
  );
}
