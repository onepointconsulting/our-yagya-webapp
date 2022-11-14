import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push("/search");
    }
  };
  return (
    <>
      <div className="ml-2 cursor-pointer md:ml-4 lg:pt-5">
        <button
          onClick={search}>
          <img
            className="h-[1.3rem] md:h-8"
            src="../img/icons/Search.png"
            alt="magnifying glass"
            title="magnifying glass"
          />
        </button>
      </div>

      {searchIsOpen && (
        <div className="fixed lg:absolute top-8 md:top-6 xl:top-4 left-12 md:left-28 w-auto md:w-full lg:w-[44rem] xl:w-[53rem] 2xl:w-[76rem]">
        <div>
            <input
              onKeyPress={handleKeyPress}
              type="text"
              name="search"
              placeholder={t("Search by keywords")}
              className="w-full p-4 py-2 text-lg placeholder-gray-400 bg-[#ffffff] border-2 border-gray-400 outline-none md:p-4 md:py-3 md:text-2xl xl:text-3xl filosofia_italic"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
