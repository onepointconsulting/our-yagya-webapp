const BackToTop = () => {
  return (
    <div
      id="btn-back-to-top"
      className="absolute lg:sticky z-10 flex items-center justify-center p-2 px-2 border-2 border-red-600 rounded-full cursor-pointer lg:mb-2 right-2 md:right-4 lg:h-[2.5rem] lg:w-[2.5rem] ml-auto mr-4 bottom-auto  bg-slate-50"
    >
      <img
        className=" h-auto md:h-6 w-[14px] md:w-6"
        src="../img/icons/backto_top.png"
        alt=""
      />
    </div>
  );
};
export default BackToTop;
