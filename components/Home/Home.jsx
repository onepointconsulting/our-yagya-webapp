import React, { useContext } from 'react'
import Slider from '../Slider/Slider'
import HomeMain from './HomeMain'
import Video from './Video'
import { IndexContext } from '../../pages'

/**
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home () {
    const { data } = useContext(IndexContext)
    return (
        <div className="bg-slate-50 h-full">
            <Slider data={data}/>
            <HomeMain/>
            <Video/>
        </div>
    )
}
