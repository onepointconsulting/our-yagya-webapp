import React from "react";
import { ToggleContext, useToggle } from "../../context/ToggleContext";
import Toggle from "../ClassesPage/Toggle";
import SideBar from "../HeaderGeneral/SideBar";
import MurliSearchBadges from "./MurliSearchBadges";

export default function MurliSearchResults() {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <div className="md:flex w-full">
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="h-full mt-2 md:mt-4 top-16 md:top-20 lg:top-4 sticky w-max z-10">
          {isOpen ? <SideBar /> : <Toggle />}
        </div>
      </ToggleContext.Provider>

      <div
        className="relative md:ml-2 mx-2"
        style={{ minHeight: " calc(100vh - 100px)" }}
      >
        <div className="w-full h-full overflow-x-scroll 2xl:overflow-x-auto mr-4">
          <MurliSearchBadges />

        <div className="my-8">
          <h1 className="flex justify-center text-center cursor-poainter">
            {/*TODO: Change this to a meaningful*/}
            <a href="/events.html">
              <img className="w-8" src="/img/icons/ArrowDown.png" alt="" />
            </a>
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
}
