import React from 'react'
import GoldenButtons from './GoldenButtons'
import LatestClasses from './LatestClasses'
import Toggle from './Toggle'
import { ToggleContext, useToggle } from '../../context/ToggleContext'

export default function Classes () {
  const { isOpen, handleOpen, handleClose } = useToggle()
  return (

    <div className="flex">
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <Toggle/>
        <div className="w-full">
          <LatestClasses/>
          <GoldenButtons/>
        </div>
      </ToggleContext.Provider>
    </div>
  )
}
