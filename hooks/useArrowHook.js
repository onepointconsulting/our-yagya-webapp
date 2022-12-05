import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

const useArrowHook = (arrowDirection, start) => {
  const { t } = useTranslation();
  const iconUrl = useMemo(() => arrowDirection === "up" ? "/img/icons/ArrowUp.png" : "/img/icons/ArrowDown.png", [arrowDirection])
  const step = useMemo(() => arrowDirection === "up" ? -3 : +3, [arrowDirection])
  const isOnTop = useMemo(() => arrowDirection === "up" && start === 0, [start])
  return [t, iconUrl, step, isOnTop]
}

export default useArrowHook