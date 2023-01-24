import React from "react";
import { ToggleContext, useToggle } from "../../context/ToggleContext";
import Toggle from "../ClassesPage/Toggle";
import SideBar from "../HeaderGeneral/SideBar";
import MurliSearchBadges from "./MurliSearchBadges";
import ClassSpeaker from "../ClassesPage/ClassSpeaker";

export default function MurliSearchResults() {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <div>
        <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
          <div className="h-full mt-2 top-16 md:top-20 lg:top-4 sticky w-max z-10 float-left mr-2">
            {isOpen ? <SideBar /> : <Toggle />}
          </div>
        </ToggleContext.Provider>

          <MurliSearchBadges />
        <div className="w-auto lg:w-full mx-2 lg:mx-0 lg:pr-3 lg:pl-20 mt-8 md:mt-20 lg:mt-1 lg:mb-3">
        <ClassSpeaker />
          <div className="my-8">
            <h1 className="flex justify-center text-center cursor-poainter">
              <a href="/events.html">
                <img className="w-8" src="/img/icons/ArrowDown.png" alt="" />
              </a>
            </h1>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
