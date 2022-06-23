import { useState, useCallback, useEffect } from 'react';
import HomeHero from './Home/HomeHero';
import MainMenu from './MainMenu';

const useMediaQuery = (height) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setDisplayMenu(true);
    } else {
      setDisplayMenu(false);
    }
  }, []);

  useEffect(() => {
    const heightD = 200;
    const media = window.matchMedia(`(max-height: ${heightD}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setDisplayMenu(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return displayMenu;
};


const Test = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <HomeHero />
        </div>
      ) : (
        <div>
        <MainMenu />
        </div>
   ) }
   </div>
)}

export default Test;