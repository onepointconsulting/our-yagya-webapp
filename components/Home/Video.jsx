import React, { useContext } from 'react'
import Sustenanc from './Sustenanc'
import { useTranslation } from 'react-i18next'
import { GlobalContext } from '../../pages/_app'
import { formateDate } from '../../lib/dateAdapter'

const videoAdapter = (data) => {
    const video = data?.data?.videos?.data
    if (!video || video.length === 0) {
        return []
    }
    return video[0]?.attributes
}

const durationAdapter = (videoData) => {
    // Return a string with duration.
}

export default function Video ({ data }) {
    const {locale} = useContext(GlobalContext)
    const { t } = useTranslation();
    const videoData = videoAdapter(data)
    console.log('the video', videoData)

    return (
        <div className="mx-auto my-4">
            {/* Sustenanc Menu */}
            <Sustenanc/>

            {/* video preview */}
            <div className="w-auto mx-auto mt-6 bg-video-pre-color xl:w-3/4">
                <div className="bg-gold1">
                    <h1 className="p-2 pl-4 text-2xl text-slate-50 capitalize md:p-[.75rem] md:pl-6 md:text-[2.25rem] filosofia_italic">
                        {t('featured video')}
                    </h1>
                </div>

                <div
                    className="mt-2 ml-3 mr-3 metropolis_medium bg-gray50 lg:mr-0 lg:ml-0 md:mt-0 mb-8"
                >
                    <div
                        className="w-auto mx-auto lg:w-4/5 xl:w-auto max-w-auto pt-auto md:pt-4 lg:pt-10 xl:pt-12 px-auto md:px-4 lg:px-10 xl:px-14">
                        <div className="relative w-full pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full border-0 rounded-sm shadow-xl"
                                src={videoData.video}
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div
                            className="flex flex-col items-start justify-between pt-4 pb-4 text-sm md:flex-row md:items-center md:text-base lg:text-lg xl:text-xl">
                            <div>
                                <div className="font-semibold text-gray-500">
                                    <strong>{videoData.title}</strong>
                                </div>
                                <div className="text-gray-500">
                                    <span>{t('Speaker')}: {videoData.speaker}</span>
                                </div>
                            </div>
                            <div
                                className="text-left text-gray-500 md:text-right">
                                <div>{formateDate(videoData.date, locale)}</div>
                                <div>Duration: 1:03:45</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
