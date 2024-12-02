"use client";

import { NaviBar } from "../loomDetailUi";
import { LoomUi, SideBarLoom } from "../loomUi";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="w-96">
          {" "}
          <SideBarLoom />
        </div>
        <div className="w-full">
          <LoomUi />
        </div>
      </div>

      <NaviBar />
    </>
  );
}
