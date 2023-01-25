import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { useRouter } from 'next/router'

const MenuLink = ({ attributes, isLast }) => {
  const url = attributes.url;
  return (
    <>
      {url.indexOf("/") === 0 ? (
        <Link href={attributes.url}>
          <h6 className="menu">{attributes.title}</h6>
        </Link>
      ) : (
        <Link className="menu cursor-pointer" href={attributes.url}>
          {attributes.title}
        </Link>
      )}
      {!isLast && <a className="text-gray-100">|</a>}
    </>
  );
};

const SubMenu = ({ mainMenu }) => {
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
      <div
        className="hidden lg:flex-row flex-wrap items-end w-full p-3 mx-auto text-center filosofia_regular bg-red70 md:flex md:justify-around lg:justify-evenly"
        style={{ zIndex: -6 }}>
          
        {children.map((child, i) => {
          return (
            <MenuLink
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
const MainMenu = () => {
  const { mainMenu } = useContext(GlobalContext);

  return (
    <>
      <div className="relative z-30 hidden lg:block">
        <div className="hidden lg:flex-row flex-wrap items-end w-full p-3 mx-auto text-center filosofia_regular bg-grayDark md:flex md:justify-around lg:justify-evenly">
          {mainMenu.map((menu, i) => {
            return (
              <MenuLink
                key={i}
                attributes={menu.attributes}
                isLast={mainMenu.length - 1 === i}
              />
            );
          })}
        </div>
      </div>
      <SubMenu mainMenu={mainMenu} />
    </>
  );
};

export default MainMenu;
