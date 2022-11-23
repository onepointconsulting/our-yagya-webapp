import React, { useContext } from 'react'
import { singleNewsAdapter } from '../../lib/newsAdapter'
import Router from 'next/router'
import SocialMediaIcons from './SocialMediaIcons'
import { formateDate } from '../../lib/dateAdapter'
import { GlobalContext } from '../../pages/_app'

const BackArrow = () => {
    return (
        <div className="cursor-pointer">
            <img
                onClick={() => Router.back()}
                className="w-4 lg:w-8"
                src="../img/ArrowSide.png"
                alt=""
            />
        </div>
    )
}

const NewsVideo = ({ singleNesData }) => {
    return (
        <>
            {!!singleNesData.sNewsVideo && <div className="relative w-full pb-[56.25%]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-md shadow-xl"
                    src={singleNesData.sNewsVideo}
                    allowFullScreen
                ></iframe>
            </div>}
        </>
    )
}

export default function SingleNewsMain ({ data }) {
    const SingleNewsData = singleNewsAdapter(data)

    console.log('SingleNewsData', JSON.stringify(SingleNewsData))

    const { locale } = useContext(GlobalContext)

    return (
        <div>
            <div className="w-full">
                <div className="mx-4 md:mx-8">
                    <div
                        className="flex items-center justify-between pt-8 xl:mx-8">
                        <div className="flex items-center">
                            <BackArrow/>

                            <div className="ml-4">
                                <div>
                                    <h1 className="text-gold1 text-[1rem] xs:text-[23px] md:text-4xl xl:text-6xl filosofia_italic">
                                        {SingleNewsData.sNewsTitle}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="relative pt-1.5">
                            <div
                                className="pl-2 pr-2 cursor-pointer lg:m-auto md:pl-3 md:pr-3"
                                id="share_btn"
                            >
                                <img
                                    className="w-7 md:w-9 lg:w-9 xl:w-12"
                                    src="../img/svg/Share.svg"
                                    alt="share btn"
                                />
                            </div>
                            <SocialMediaIcons/>
                        </div>
                    </div>

                    {/* <!-- date --> */}
                    <div
                        className="ml-8 lg:ml-12 xl:ml-20 flex items-center text-sm text-[#a9a9a9] md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">
                            {' '}
                            {formateDate(SingleNewsData.sNewsTimestamp, locale,
                                'cccc, dd LLLL yyyy')}
                        </div>
                    </div>

                    <div className="w-full mx-auto xl:w-5/6">
                        <NewsVideo singleNesData={SingleNewsData}/>
                        <div className="pt-4 text-justify">
                            <h3 className="text-sm text-gray-400 xl:leading-relaxed md:text-2xl lg:text-3xl">
                                {SingleNewsData.sNewsContent}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
