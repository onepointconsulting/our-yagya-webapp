import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../../../pages/_app';
import { formateDateToLocal } from '../../../lib/dateAdapter';

export default function NewsListingMain ({news}) {
  const { locale } = useContext(GlobalContext);
  return (
    <div className="mt-4 fadeInLeft md:-mt-4 lg:mt-36">
      {news.map((item, index) => (
        <Link href="/classes-details" key={`news_listing_${index}`}>
          <div
            className={
              index % 2 === 0
                ? 'my-3 bg-gray-200'
                : 'my-3 bg-white'
            }
          >
            <div className="flex items-center w-auto">
              <div className="relative w-24 h-20 md:w-64 md:h-36">
                <img
                  alt={item.title}
                  src={item.imageThumbnailUrl}
                  className="absolute object-cover w-full h-full"/>
              </div>

              <div
                className="py-2 pl-4 break-words w-52 xs:w-64 md:w-full md:truncate">
                <h1
                  className="text-base font-medium leading-4 text-redfull xs:text-[14px] md:text-2xl xl:text-3xl whitespace-nowrap md:whitespace-normal overflow-ellipsis overflow-hidden metropolis_medium">
                  {item.title}
                  {/* <br/>
                  {item.content} */}
                </h1>

                <div className="flex items-center w-full">
                  <div className="mr-2">
                    <p className="text-sm text-gray-400 xs:text-lg lg:text-xl">
                      posted
                    </p>
                  </div>

                  <div className="text-sm text-gray-400 xs:text-lg lg:text-xl">
                    <p> {formateDateToLocal(
      item.timestamp ?? item.timestamp,
      locale,
      item.timezone,
      'dd LLLL yyyy',
    )}{" "}{formateDateToLocal(
      item.timestamp ?? item.timestamp,
      locale,
      item.timezone,
      'hh:mm a ZZZZ',
    )}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Link>

      ))}
      {/* <h1
        className="flex justify-center my-20 text-6xl text-center text-gray-700 cursor-pointer md:my-10">
        <Link href="#">
          <img className="w-8 xs:w-10 md:w-12" src="/img/icons/ArrowDown.png"
               alt=""/>
        </Link>
      </h1> */}
    </div>
  )
}
