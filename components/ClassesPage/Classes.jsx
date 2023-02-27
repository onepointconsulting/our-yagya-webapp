import React from "react";
import LatestClasses from "./LatestClasses";
import ClassSpeaker from "./ClassSpeaker";
import Toggle from "./Toggle";
import { ToggleContext, useToggle } from "../../context/ToggleContext";
import SideBar from "../HeaderGeneral/SideBar";
import Video from "../HomePage/Video";

export default function Classes() {
  const { isOpen, handleOpen, handleClose } = useToggle();     


  return (
    <div>
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="h-full mt-2 top-16 md:top-20 lg:top-28 sticky w-max z-10 float-left mr-2">
          {isOpen ? <SideBar /> : <Toggle />}
        </div>
      </ToggleContext.Provider>

        <LatestClasses />
      <div className="w-auto lg:w-full mx-2 lg:mx-0 lg:pr-3 lg:pl-20 mt-8 md:mt-20 lg:mt-1 lg:mb-3">
        <ClassSpeaker />
        <Video />
      </div>
  </div>
  );
}
