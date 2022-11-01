import React from 'react'
import Slider from '../Slider/Slider'
import HomeMain from './HomeMain'
import Video from './Video'

/**
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home () {

    return (
        <div className="bg-slate-50 h-full">
            <Slider/>
            <HomeMain/>
            <Video/>
        </div>
    )
}
