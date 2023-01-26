import { useEffect, useState } from 'react'

const useMenuScrollHooks = () => {
    const [stickyPillMenu, setStickyPillMenu] = useState(false);
    const windowHeight = 222;

    useEffect(() => {
        const scrollListener = (e) => {
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