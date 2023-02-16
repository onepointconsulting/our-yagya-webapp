import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { useRouter } from "next/router";

const MenuLink = ({ attributes, isLast, lineClass = "text-gray-100" }) => {
  const url = attributes.url;
  return (
    <>
      {url.indexOf("/") === 0 ? (
        <Link href={attributes.url}>
          <h6 className="cursor-pointer menu">{attributes.title}</h6>
        </Link>
      ) : (
        <Link className="cursor-pointer menu" href={attributes.url}>
          {attributes.title}
        </Link>
      )}
      {!isLast && <a className={lineClass}>|</a>}
    </>
  );
};

const SubMenu = ({
  mainMenu,
  lineClass,
  subMenuClass = "flex-wrap items-end hidden w-full p-3 mx-auto text-center lg:flex-row filosofia_regular bg-red70 md:flex md:justify-around lg:justify-evenly",
}) => {
  const { pathname } = useRouter();
  let actualPathName = pathname === "/" ? "/index" : pathname;
  const currentMenu = mainMenu.filter(
    (mm) =>
      mm.attributes.url === pathname || mm.attributes.url === actualPathName
  );
  if (
    currentMenu.length > 0 &&
    currentMenu[0]?.attributes?.children?.length > 0
  ) {
    const children = currentMenu[0]?.attributes?.children;

    return (
      <div className={subMenuClass} style={{ zIndex: -6 }}>
        {children.map((child, i) => {
          return (
            <MenuLink
              lineClass={lineClass}
              key={i}
              attributes={child.attributes}
              isLast={children.length - 1 === i}
            />
          );
        })}
      </div>
    );
  }

  return <></>;
};

/**
 * Used to render the main menu.
 * @returns {JSX.Element}
 * @constructor
 */
const MainMenu = ({
  lineClass,
  subMenuClass,
  mainMenuClass = "flex-wrap items-end hidden w-full p-3 mx-auto text-center lg:flex-row filosofia_regular bg-grayDark md:flex md:justify-around lg:justify-evenly",
}) => {
  const { mainMenu } = useContext(GlobalContext);

  return (
    <>
      <div className="relative z-30">
        <div className={mainMenuClass}>
          {mainMenu.map((menu, i) => {
            return (
              <MenuLink
                lineClass={lineClass}
                key={i}
                attributes={menu.attributes}
                isLast={mainMenu.length - 1 === i}
              />
            );
          })}
        </div>
      </div>
      <SubMenu mainMenu={mainMenu} lineClass={lineClass} subMenuClass={subMenuClass}/>
    </>
  )
}

export default MainMenu;
