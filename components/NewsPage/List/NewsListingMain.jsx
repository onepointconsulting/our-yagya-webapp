import React from 'react'
import Link from 'next/link'

export default function NewsListingMain () {
  const searchData = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur.',
      published: 'Tue Mar 17 2021',
      subTitle: ' Heart of the Canadian Rockies',
      posted: '1 December 2022',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur.',
      published: 'Tue Mar 17 2021',
      subTitle: ' Heart of the Canadian Rockies',
      posted: '1 December 2022',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur.',
      published: 'Tue Mar 17 2021',
      subTitle: ' Heart of the Canadian Rockies',
      posted: '1 December 2022',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur.',
      published: 'Tue Mar 17 2021',
      subTitle: ' Heart of the Canadian Rockies',
      posted: '1 December 2022',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tenetur.',
      published: 'Tue Mar 17 2021',
      subTitle: ' Heart of the Canadian Rockies',
      posted: '1 December 2022',
    },
  ]

  return (
    <div className="mt-4 fadeInLeft md:-mt-4 lg:mt-36">
      {searchData.map((item, index) => (
        <Link href="/details.html" key={`news_listing_${index}`}>
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
                  alt="TODO"
                  src="https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg"
                  className="absolute object-cover w-full h-full"/>
              </div>

              <div
                className="py-2 pl-4 break-words w-52 xs:w-64 md:w-full md:truncate">
                <h1
                  className="text-base font-medium leading-4 text-redfull xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap md:whitespace-normal overflow-ellipsis overflow-hidden metropolis_medium">
                  {item.title}
                  <br/>
                  {item.subTitle}
                </h1>

                <div className="flex items-center w-full">
                  <div className="mr-2">
                    <p className="text-sm text-gray-400 xs:text-lg lg:text-xl">
                      posted
                    </p>
                  </div>

                  <div className="text-sm text-gray-400 xs:text-lg lg:text-xl">
                    <p> {item.posted}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Link>

      ))}
      <h1
        className="flex justify-center my-20 text-6xl text-center text-gray-700 cursor-pointer md:my-10">
        <Link href="#">
          <img className="w-8 xs:w-10 md:w-12" src="/img/icons/ArrowDown.png"
               alt=""/>
        </Link>
      </h1>
    </div>
  )
}
