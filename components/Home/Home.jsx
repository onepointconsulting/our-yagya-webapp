import React from 'react'
import Slider from '../Slider/Slider'
import HomeMain from './HomeMain'
import Video from './Video'

export default function Home ({ data }) {
    return (
        <div className="bg-slate-50 h-full">
            <Slider/>
            <HomeMain data={data}/>
            <Video/>
        </div>
    )
}
