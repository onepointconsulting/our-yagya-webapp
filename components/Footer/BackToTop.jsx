import React, { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState("Lol");

  const backToTopToggle = () => {};

  const goToTopBaby = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute top-[-2rem] z-10 flex items-center justify-center p-2 px-2 border-2 border-red-600 rounded-full cursor-pointer lg:mb-2 right-2 md:right-4 lg:h-[2.5rem] lg:w-[2.5rem] ml-auto mr-4 bottom-auto  bg-white">
      <img
        onClick={goToTopBaby}
        className="h-auto md:h-6 w-[14px] md:w-6"
        src="/img/icons/backto_top.png"
        alt=""
      />
    </div>
  );
};
export default BackToTop;
