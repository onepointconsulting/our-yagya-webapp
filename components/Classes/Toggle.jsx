import React from "react";

const Toggle = () => {
  return (
    <div
      className="fixed left-0 mt-1 top-20 xs:top-28 md:tpo-[6rem] lg:static md:mt-6 lg:mt-0"
      style={{zIndex: "1"}}
    >
      <div className="flex items-center justify-center p-2 mx-auto cursor-pointer bg-darkGray lg:mt-4 w-11 md:w-14 lg:w-16 lg:h-20 xl:h-20">
        <img
          id="openbtn1"
          className="w-8 mx-auto md:w-12 lg:w-auto "
          src="../img/Layer.png"
          alt="opening sidebar menu"
        />
      </div>
    </div>
  );
};

export default Toggle;
