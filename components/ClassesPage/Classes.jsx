import React from "react";
import GoldenButtons from "./GoldenButtons";
import LatestClasses from "./LatestClasses";
import ClassSpeaker from "./ClassSpeaker";
import Toggle from "./Toggle";
import { ToggleContext, useToggle } from "../../context/ToggleContext";
import SideBar from "../HeaderGeneral/SideBar";

export default function Classes() {
  const { isOpen, handleOpen, handleClose } = useToggle();     


  return (
    <div className="md:flex">
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="h-full mt-2 md:mt-4 top-16 md:top-20 lg:top-4 sticky w-max z-10">
          {isOpen ? <SideBar /> : <Toggle />}
        </div>
      </ToggleContext.Provider>

      <div className="w-full md:ml-2 mx-2 mb-3">
        <LatestClasses />
        <ClassSpeaker />
        <GoldenButtons />
      </div>
  </div>
  );
}
