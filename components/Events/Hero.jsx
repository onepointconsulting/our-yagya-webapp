import React from "react";
import { imageAdapter } from "../../lib/imageAdapter";

export default function Hero({data}) {
    const bgImage = imageAdapter(data);

  return (
    <div
      className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
      style={{ background: `url(${bgImage}) center center / cover no-repeat` }}
    >
      <div className="flex items-center justify-center w-full mt-28 md:mt-36 lg:mt-52">
        <div className="relative w-full h-full ml-auto mr-auto bg-[#ffffff] bg-opacity-95 lg:m-4 md:w-11/12 lg:w-10/12">
          <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-gold1 md:text-4xl">
            Featured Events
          </div>
          <div className="flex pt-3">
            <div className="w-full pb-4">
              {/* <!-- online events section 1 --> */}
              <a href="/calendar_events.html">
                <div className="flex items-center justify-between pt-[0.5rem]">
                  <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                    {/* <!-- img --> */}

                    <div className="relative w-[27vw] md:w-36">
                      <img
                        className="object-cover w-full h-full"
                        src="https://ouryagyaproject.netlify.app/img/events_img.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                      <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                        Experience Peace and Calm in Your Own Home
                      </h1>

                      <div className="w-full">
                        <div>
                          <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                            7 December 2021
                          </p>
                        </div>

                        <div className="text-[12px] leading-4 text-gray-400 md:text-base lg:text-lg">
                          <p>
                            6:30-8:30pm{" "}
                            <span className="underline underline-offset-2">
                              EDT
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-20 xs:w-24 xl:w-32">
                    <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-info-50.png"
                          alt=""
                        />
                      </div>
                      <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        More Info
                      </div>
                    </div>

                    <div className="flex rounded-lg bg-[#fa5959] items-center text-center px-1 my-1 py-1 cursor-pointer">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-pencil-64.png"
                          alt=""
                        />
                      </div>
                      <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        Register
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/calendar_events.html">
                {/* <!-- online events section 2 --> */}
                <div className="flex items-center justify-between pt-[0.5rem]">
                  <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                    {/* <!-- img --> */}

                    <div className="relative w-[27vw] md:w-36">
                      <img
                        className="object-cover w-full h-full"
                        src="https://ouryagyaproject.netlify.app/img/events_img.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                      <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                        An apointment with Yourself
                      </h1>

                      <div className="w-full">
                        <div>
                          <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                            7 December 2021
                          </p>
                        </div>

                        <div className="text-[12px] leading-4 text-gray-400 md:text-base lg:text-lg">
                          <p>
                            6:30-8:30pm{" "}
                            <span className="underline underline-offset-2">
                              EDT
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-20 xs:w-24 xl:w-32">
                    <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-info-50.png"
                          alt=""
                        />
                      </div>
                      <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        More Info
                      </div>
                    </div>

                    <div className="flex items-center px-1 py-1 my-1 text-center rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-pencil-64.png"
                          alt=""
                        />
                      </div>
                      <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        Register
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="/calendar_events.html">
                {/* <!-- online events section 3 --> */}
                <div className="flex items-center justify-between pt-[0.5rem]">
                  <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                    {/* <!-- img --> */}

                    <div className="relative w-[27vw] md:w-36">
                      <img
                        className="object-cover w-full h-full"
                        src="https://ouryagyaproject.netlify.app/img/events_img.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                      <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                        Experience Peace and Calm in Your Own Home
                      </h1>

                      <div className="w-full">
                        <div>
                          <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                            7 December 2021
                          </p>
                        </div>

                        <div className="text-[12px] leading-4 text-gray-400 md:text-base lg:text-lg">
                          <p>
                            6:30-8:30pm{" "}
                            <span className="underline underline-offset-2">
                              EDT
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-20 xs:w-24 xl:w-32">
                    <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-info-50.png"
                          alt=""
                        />
                      </div>
                      <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        More Info
                      </div>
                    </div>

                    <div className="flex items-center px-1 py-1 my-1 text-center rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-pencil-64.png"
                          alt=""
                        />
                      </div>
                      <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        Register
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="/calendar_events.html">
                {/* <!-- online events section 4 --> */}
                <div className="flex items-center justify-between pt-[0.5rem]">
                  <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                    {/* <!-- img --> */}

                    <div className="relative w-[27vw] md:w-36">
                      <img
                        className="object-cover w-full h-full"
                        src="https://ouryagyaproject.netlify.app/img/events_img.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                      <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                        An apointment with Yourself
                      </h1>

                      <div className="w-full">
                        <div>
                          <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                            7 December 2021
                          </p>
                        </div>

                        <div className="text-[12px] leading-4 text-gray-400 md:text-base lg:text-lg">
                          <p>
                            6:30-8:30pm{" "}
                            <span className="underline underline-offset-2">
                              EDT
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-20 xs:w-24 xl:w-32">
                    <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-info-50.png"
                          alt=""
                        />
                      </div>
                      <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        More Info
                      </div>
                    </div>

                    <div className="flex items-center px-1 py-1 my-1 text-center rounded-lg cursor-pointer bg-gold1">
                      <div>
                        <img
                          className="w-4 xs:w-6 lg:w-7"
                          src="../img/icons8-pencil-64.png"
                          alt=""
                        />
                      </div>
                      <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                        Register
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- arrow down icon --> */}
          <h1 className="flex justify-center my-4 text-6xl text-center text-gray-400 cursor-pointer md:my-10">
            <a href="/events.html">
              <img
                className="w-8 xs:w-10 md:w-12"
                src="./img/icons/ArrowDown.png"
                alt=""
              />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
