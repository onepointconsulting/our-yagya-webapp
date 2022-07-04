import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchIcon = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const router = useRouter();

  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push("/search");
      console.log("enter press here! ");
    }
  };
  return (
    <>
      <div className="flex flex-col w-64 mb-4">
        <button
          onClick={search}
          className="absolute md:left-8 left-3 lg:left-2 top-6 md:top-8 cursor-pointer"
        >
          <img
            className="h-5 xs:h-8 md:h-auto"
            src="../img/magnifying_glass.svg"
            alt=""
          />
        </button>
        <div className=" hidden lg:block">
          <Link href="/">
            <a>
              <img
                className="w-auto lg:h-20 lg:pl-16 lg:mb-[5%] xl:mb-[4%] "
                src="./img/BK_Stacked_SM.png"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>

      {searchIsOpen && (
        <div className="w-[70%] lg:w-[68%] xl:w-[74%] 2xl:w-[78%] mx-auto z-50 absolute top-[5px] xs:top-[10px] md:top-4 left-[14%] xs:left-16 md:left-28 lg:left-16 right-auto">
          <div className="p-2 itemce-center">
            <input
              onKeyPress={handleKeyPress}
              type="text"
              name="search"
              placeholder="Search by keywords"
              className="p-4 md:p-6 w-full  py-2 md:py-4 border-2 text-lg md:text-2xl xl:text-3xl border-gray-400 outline-none filosofia_italic bg-white placeholder-gray-400"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchIcon;
