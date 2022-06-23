import { useEffect, useState } from 'react'

const MINIMUM_WINDOW_HEIGHT = 222

const useMenuScrollHooks = () => {
    const [stickyPillMenu, setStickyPillMenu] = useState(false);
    const windowHeight = MINIMUM_WINDOW_HEIGHT;

    useEffect(() => {
        const scrollListener = (e) => {
            console.info("onScroll")
            if (window.scrollY >= windowHeight) {
                setStickyPillMenu(true)
            } else {
                setStickyPillMenu(false)
            }
        }
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", scrollListener)
            return () => window.removeEventListener('scroll', scrollListener, true);
        }
    }, [])

    return [stickyPillMenu]
}

export default useMenuScrollHooks