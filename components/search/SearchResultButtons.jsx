import SearchResult from "./SearchResult";
import SideBarMenu from "./../SideBar/SideBarMenu";

const SearchResultButtons = () => {
  return (
    <div>
      <div className="flex pl-8 mx-2 md:pl-0 xss:mx-4 md:mx-auto">
        {/* <!-- opening icon --> */}
        <div
          id="mainSide"
          className="z-50 lg:sticky xss:top-16 top-12 lg:top-24"
        >
          <div
            className="fixed left-0 mt-1 top-20 xs:top-24 md:top-28 lg:static md:mt-6 lg:mt-0"
            style={{ zIndex: "1" }}
          >
            <div className="flex items-center justify-center p-2 mx-auto cursor-pointer bg-darkGray lg:mt-4 w-11 md:w-14 lg:w-16 xl:w-20 lg:h-20 xl:h-24">
              <img
                id="openbtn1"
                className="w-8 mx-auto md:w-12 lg:w-auto "
                src="../img/Layer.png"
                alt="opening sidebar menu"
              />
            </div>
          </div>

          {/* <!-- HIdden all time --> */}
          <div className="hidden mt-0 md:block md:invisible">
            <div className="w-16"></div>
          </div>

          {/* <!-- open sidebar --> */}
          {/* @@include('./sidebar_classess.html', {"leftS": "p-4 h-screen overflow-y-auto max-h-[37rem]", "MobileSideBarClass": "fixed left-0 top-32 xs:top-36 md:top-48 lg:top-auto lg:absolute h-screen bg-darkGray transition-all overflow-x-hidden z-10"}) */}
        </div>
        <div className="hidden">
          <SideBarMenu />
        </div>
        {/* <!-- next --> */}
        <div className="w-full mb-8 -mr-8 lg:-ml-auto lg:mx-4 md:mr-4 lg:mr-auto">
          {/* <!-- opening sidebar menu in mobile menu --> */}
          <div className="flex items-center justify-start mt-3 mb-4 md:ml-3 xl:mt-6 md:pt-1">
            <h1 className="ml-2 md:ml-0 pr-2 pt-2 pb-2 text-2xl capitalize xl:mr-4 xss:text-3xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
              results for
            </h1>

            <div className="bg-[#ffdab2] rounded-full p-2 md:p-3 xl:p-4 text-white flex justify-between items-center">
              <div>
                <img
                  className="h-5 xs:h-7"
                  src="../img/magnifying_glass.svg"
                  alt=""
                />
              </div>
              <div className="px-1 text-sm text-gray-500 md:text-base xl:text-2xl xl:px-2  text-ellipsis overflow-hidden whitespace-nowrap">
                Rakshabamdahan
              </div>
              <div
                onclick="history.go(-1)"
                className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold2 xl:pl-4"
              >
                X
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-4 mb-4 md:ml-3 md:justify-start xl:mt-6 md:pt-1">
            <h1 className="pt-2 pb-2 text-3xl capitalize xss:text-4xl xl:text-6xl text-gold1 text-emoji filosofia_italic ml-[4px]">
              Classes {"&"} talks
            </h1>
          </div>
          <SearchResult />
        </div>
      </div>
    </div>
  );
};
export default SearchResultButtons;
