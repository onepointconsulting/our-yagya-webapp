import React, { useContext } from 'react'
import Slider from '../Slider/Slider'
import HomeMain from './HomeMain'
import Video from './Video'

export default function Home () {
    return (
        <div className="bg-white h-full">
            <Slider/>
            <HomeMain/>
            <Video/>
        </div>
    )
}
