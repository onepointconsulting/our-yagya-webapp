import React from "react";
import MainMenu from "./MainMenu";

const SidebarMenu = () => {

  return (
    <div
      className="fixed top-0 right-0 block w-48 h-screen overflow-y-auto transition duration-700 ease-in-out lg:hidden lg:top-20 bg-grayDark md:w-52 md:translate-x-0"
      style={{ zIndex: "-1" }}
    >
      <MainMenu
        mainMenuClass="flex flex-col p-2 filosofia_regular lg:p-4 mt-36"
        lineClass="hidden"
        subMenuClass=" bg-red70 text-left menu"
      />
    </div>
  );
};

export default SidebarMenu;
