import React from 'react'
import Calendar from './Calendar'

const Filter = () => {
  return (
    <div className="flex justify-between my-4 metropolis_medium bg-filter-bg ">
      <div
        className="px-4 py-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
        Filter by
      </div>

      <div className="">
        <div className="mx-4 my-4 relative flex justify-end">
          <select className="filter appearance-none">
            <option>Meditation</option>
            <option>Talks</option>
            <option>Reads</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>Five docks</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>suitable for BKS</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const accordinData = [
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
  {
    image: '/img/Rectangle.png',
    title: 'Experience Peace and Calm in Your Own Home Angel[Los Angeles]',
    date: '7 December 2021',
    time: '6:30-8:30pm EDT',
  },
]
const SpecialDay = () => {
  return (
    // <!-- right section -->
    <div className="text-xl text-gray-900 lg:border-0 border-2 border-gold1">
      {/* <!-- Start -> special days section --> */}
      <div>
        <div className="bg-slate-50">
          <h1
            className="pb-2 ml-2 text-3xl font-light filosofia_italic md:text-4xl text-gold1 md:ml-0 md:p-2">
            Special Days
          </h1>

          <div className="metropolis_medium">
            <div className="p-2">
              <div
                className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Humans rights day
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p
                    className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div
                  className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{' '}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Christmas Day
              </div>
              <div
                className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                10 December 2021
              </div>
            </div>

            <div className="p-2">
              <div
                className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div
                className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>

            <div className="p-2">
              <div
                className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p
                    className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div
                  className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{' '}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div
                className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div
                className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End -> special days section --> */}

      {/* <!-- arrow down icon --> */}
      <div>
        <h1
          className="flex justify-center py-4 text-5xl text-center text-gray-700 lg:py-8 cursor-poainter">
          <a href="/events.html">
            <img
              className="w-8 md:w-16"
              src="./img/icons/ArrowDown.png"
              alt=""
            />
          </a>
        </h1>
      </div>
    </div>
  )
}

const EventsAccordion = () => {
  return (
    <div className="relative mx-auto">
      <div className="flex justify-start filosofia_italic">
        <div className="flex items-center justify-around">
          <img
            src="../img/arrow-left.png"
            className="w-8 h-8 p-1 mr-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
          />
          <span className="mt-1 text-3xl md:text-4xl text-gold1"> 12/2/21</span>
          <img
            src="../img/asset1.png"
            className="w-8 h-8 p-1 ml-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
          />
        </div>
      </div>

      <div className="xl:my-8">
        <div className="flex">
          <div className="w-full pb-4">
            {/* <!-- online events section 1 --> */}
            {accordinData.map((ed, i) => {
              return (
                <>
                  <div className="relative" key={i}>
                    <div
                      className="flex justify-between my-2 bg-gray-100 cursor-pointer md:items-center eventAccordion metropolis_medium">
                      <div
                        className="flex items-center w-full md:w-4/5 lg:w-5/6 xl:w-5/6">
                        {/* <!-- img --> */}

                        <div className="relative w-[27vw] md:w-36">
                          <img
                            className="object-cover w-full h-full"
                            src={ed.image}
                            alt={ed.image}
                          />
                        </div>
                        <div
                          className="w-full md:w-[62%] lg:w-full px-2 md:px-4 lg:px-8">
                          <h1
                            className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                            {ed.title}
                          </h1>

                          <div
                            className="flex items-center justify-between w-full">
                            <div>
                              <p
                                className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                                {ed.date}
                              </p>
                            </div>

                            <div
                              className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                              <p>{ed.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-20 xs:w-24 xl:w-32">
                        <div
                          className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                          <div>
                            <img
                              className="w-4 xs:w-6 lg:w-7"
                              src="../img/icons8-info-50.png"
                              alt=""
                            />
                          </div>
                          <div
                            className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                            <a href="/event_card.html"> more info</a>
                          </div>
                        </div>

                        <div
                          className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                          <div>
                            <img
                              className="w-4 xs:w-6 lg:w-7"
                              src="../img/icons8-pencil-64.png"
                              alt=""
                            />
                          </div>
                          <div
                            className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                            join now
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- open accordin --> */}
                    <div
                      className="relative w-full overflow-hidden text-slate-50 bg-slate-50 shadow-md accordionBody metropolis_medium">
                      <div
                        className="flex flex-col-reverse justify-between p-3 lg:flex-row xl:p-5">
                        <div className="w-full">
                          <p className="text-base text-gray-700 md:text-xl">
                            Take a look at the image above. On the top, you can
                            see that in synchronous execution, the tasks are
                            executed in a sequential way;
                            <br/>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Hic incidunt suscipit nobis perspiciatis ex
                            odit quidem iste laudantium nemo minima .
                            <br/>
                            Doloremque reprehenderit aperiam corporis beatae
                            ratione minus illum,
                            <a href="components/Events/calendar/CalendarMain#"
                               className="underline">
                              www.bksanfrancisco.org
                            </a>
                            <a href="components/Events/calendar/CalendarMain#"
                               className="underline">
                              www.bksanfrancisco.org
                            </a>
                          </p>
                        </div>

                        {/* <!-- img --> */}
                        <div
                          className="relative flex justify-between w-full lg:w-max">
                          <div className="">
                            <img
                              className="object-cover w-auto mx-auto lg:h-auto md:w-full lg:w-96 xl:w-10/12"
                              src="https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                              alt=""
                            />
                          </div>

                          <div
                            data-share-btn="share_btn"
                            data-parent="events"
                            className="float-right my-4 cursor-pointer md:mt-4 "
                            style={{ textAlign: '-webkit-center' }}
                          >
                            <img
                              className="w-4 xs:w-6 lg:w-7"
                              src="../img/Share.png"
                              alt=""
                            />
                            <h3
                              className="text-center text-xs xs:text-[12px] lg:text-sm xl:text-base text-gray-500">
                              Share
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}


          </div>
        </div>

        {/* <!-- arrow down icon --> */}
        <div>
          <h1
            className="flex justify-center py-4 text-5xl text-center text-gray-700 lg:py-8 cursor-poainter">
            <a href="/events.html">
              <img
                className="w-8 xl:w-16"
                src="./img/icons/ArrowDown.png"
                alt=""
              />
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default function CalendarMain () {
  return (
    <>
      <div
        className="relative justify-between mt-4 xl:mb-8 bg-slate-50 lg:flex lg:mx-10 lg:mt-12 xl:mt-16">
        <div>
          <Calendar/>
          <Filter/>
        </div>
        <div>
          <SpecialDay/>
        </div>
      </div>
      <div className="w-full">
        {' '}
        <EventsAccordion/>
      </div>
    </>
  )
}
