import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'


/** --------DEACTIVATED ------
 * Custom hook for scrolling up and down events list
 * @param {*} arrowDirection 
 * @param {*} start 
 * @param {*} isEnd 
 * @returns 
 */
const useArrowHook = (arrowDirection, start, isEnd) => {
  const { t } = useTranslation();
  const iconUrl = useMemo(() => arrowDirection === "up" ? "/img/icons/ArrowUp.png" : "/img/icons/ArrowDown.png", [arrowDirection])
  const step = useMemo(() => arrowDirection === "up" ? -3 : +3, [arrowDirection])
  const isOnTop = useMemo(() => arrowDirection === "up" && start === 0, [start])
  const isTheEnd = useMemo(() => arrowDirection === "down" && isEnd, [start])
  return [t, iconUrl, step, isOnTop, isTheEnd]
}

export default useArrowHook