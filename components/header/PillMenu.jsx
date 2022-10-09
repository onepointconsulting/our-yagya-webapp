import useMenuScrollHooks from "../../hooks/useMenuScrollHook";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

/**
 * buttons menu in higher screen
 * @returns {{}}
 * @constructor
 */

const PillMenuTop = ({ attributes }) => {
  const url = attributes.url;
  const icon = attributes.icon;

  return (
    <>
      {url.indexOf("/") === 0 ? (
        <div className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
          <Link href={attributes.url}>
            <a className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
              {attributes.title}
            </a>
          </Link>
          <img
            src="../img/icons/LoginRed.png"
            alt=""
            className="w-auto h-[1.5rem]"
          />
        </div>
      ) : (
        <a className="menu">{attributes.title}</a>
      )}
    </>
  );
};

const PillMenu = () => {
  const { pillMenu } = useContext(GlobalContext);

  return (
    <div className="hidden metropolis_medium lg:flex flex-col items-center mr-4 mt-4">
      <>
        {pillMenu.map((pill, i) => {
          return <PillMenuTop key={i} attributes={pill.attributes} />;
        })}
      </>
    </div>
  );
};

export default PillMenu;
