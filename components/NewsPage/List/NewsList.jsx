import React from "react";
import { ToggleContext, useToggle } from "../../../context/ToggleContext";
import { imageAdapter } from "../../../lib/imageAdapter";
import Toggle from "../../ClassesPage/Toggle";
import SideBar from "../../HeaderGeneral/SideBar";
import NewsListingMain from "./NewsListingMain";

export default function NewsLists({ data }) {
  const { isOpen, handleOpen, handleClose } = useToggle();
  const bgImage = imageAdapter(data);
  return (
    <div
      style={{ background: `url(${bgImage}) center center / cover no-repeat` }}
    >
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="sticky z-10 float-left h-full mt-2 mr-2 top-16 md:top-20 lg:top-28 w-max">
          {isOpen ? <SideBar /> : <Toggle />}
        </div>
      </ToggleContext.Provider>

      <div className="w-auto mx-2 pt-48 lg:w-full lg:mx-0 lg:pr-3 lg:pl-20 lg:mb-3">
        <NewsListingMain news={data.data.news}/>
      </div>
    </div>
  );
}
