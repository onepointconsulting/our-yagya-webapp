import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

const useArrowHook = (arrowDirection, start, isEnd) => {
  const { t } = useTranslation();
  const iconUrl = useMemo(() => arrowDirection === "up" ? "/img/icons/ArrowUp.png" : "/img/icons/ArrowDown.png", [arrowDirection])
  const step = useMemo(() => arrowDirection === "up" ? -3 : +3, [arrowDirection])
  const isOnTop = useMemo(() => arrowDirection === "up" && start === 0, [start])
  const isTheEnd = useMemo(() => arrowDirection === "down" && isEnd, [start])
  return [t, iconUrl, step, isOnTop, isTheEnd]
}

export default useArrowHook