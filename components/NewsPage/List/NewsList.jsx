import React from "react";
import { ToggleContext, useToggle } from "../../../context/ToggleContext";
import Toggle from "../../ClassesPage/Toggle";
import SideBar from "../../HeaderGeneral/SideBar";
import NewsListingMain from "./NewsListingMain";

export default function NewsLists() {
    const { isOpen, handleOpen, handleClose } = useToggle();

    return (
        <>
            <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
                <div className="sticky z-10 float-left h-full mt-2 mr-2 top-16 md:top-20 lg:top-28 w-max">
                    {isOpen ? <SideBar /> : <Toggle />}
                </div>
            </ToggleContext.Provider>

            <div className="w-auto mx-2 mt-48 lg:w-full lg:mx-0 lg:pr-3 lg:pl-20 lg:mb-3">
                <NewsListingMain />
            </div>
        </>

    )
}