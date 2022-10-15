import React, {useState} from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const backToTopToggle = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const goToTopBaby = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", backToTopToggle);

  return (
    <div
      id="btn-back-to-top"
      className="absolute lg:sticky z-10 flex items-center justify-center p-2 px-2 border-2 border-red-600 rounded-full cursor-pointer lg:mb-2 right-2 md:right-4 lg:h-[2.5rem] lg:w-[2.5rem] ml-auto mr-4 bottom-auto  bg-slate-50"
    >
      <img
        onClick={goToTopBaby}
        style={{ display: visible ? "inline" : "none" }}
        className=" h-auto md:h-6 w-[14px] md:w-6"
        src="../img/icons/backto_top.png"
        alt=""
      />
    </div>
  );
};
export default BackToTop;
