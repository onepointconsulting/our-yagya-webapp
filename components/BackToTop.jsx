const BackToTop = () => {
  return (
    <div>
      <div
        id="btn-back-to-top"
        className="flex h-10 md:w-10 md:mb-4 absolute right-[5px] xss:right-1 md:right-8 bottom-28 xs:bottom-[7rem] md:bottom-[4rem] justify-between whitespeace-wrap items-center p-1 md:p-2 m-1 px-2 text-yagya-red bg-white border-2 rounded-full border-yagya-red-color cursor-pointer"
      >
        <img
          className="h-8 mt-[4px] md:mt-auto md:h-12 lg:h-auto self-baseline"
          src="./img/icons/back_top"
          alt=""
        />
      </div>
    </div>
  );
};
export default BackToTop;
