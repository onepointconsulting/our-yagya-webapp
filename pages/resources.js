import React from "react";
import Toggle from "../components/ClassesPage/Toggle";
import SideBar from "../components/HeaderGeneral/SideBar";
import OurYagYaResourcesMain from "../components/OurYagYaResources/OurYagYaResourcesMain";
import { ToggleContext, useToggle } from "../context/ToggleContext";

export default function Resources() {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <div className="flex flex-col  md:flex-row">
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="h-full mt-2 top-16 md:top-20 lg:top-28 sticky w-max z-10 float-left mr-2">
          {isOpen ? <SideBar /> : <Toggle />}
        </div>
      </ToggleContext.Provider>

      <OurYagYaResourcesMain />

    </div>
  );
}
