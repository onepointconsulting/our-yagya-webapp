import React from "react";
import MainMenu from "./MainMenu";

const SidebarMenu = () => {
  return (
    <div
      className="fixed top-0 right-0 block w-64 h-screen overflow-y-auto transition duration-700 ease-in-out lg:hidden lg:top-20 bg-grayDark md:w-80 md:translate-x-0"
      style={{ zIndex: "-1" }}>

      <MainMenu
        mainMenuClass="flex flex-col p-2 filosofia_regular lg:p-4 mt-36 px-8"
        lineClass="hidden"
        titleClassLink="text-2xl text-gray-100 leading-12"
        subMenuClass=" bg-red70 text-left text-2xl text-gray-100 leading-12 px-2 capitalize px-8 filosofia_regular"
      />
      
    </div>
  );
};

export default SidebarMenu;
