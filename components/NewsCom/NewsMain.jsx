import React from "react";
import { useState } from "react";
import { imageAdapter } from "../../lib/imageAdapter";

export default function NewsMain({ data }) {
  // const [accordion, setAccordion] = useState(false);

  // const search = () => {
  //   setAccordion(!accordion);
  // };
  const bgImage = imageAdapter(data);

  return (
    <div>
      {/* <!-- parent --> */}
      <div
        className="justify-between pt-12 newsBg lg:flex md:pt-16 lg:pt-72"
        style={{
          background: `url(${bgImage}) no-repeat`,
        }}
      >
        {/* <!-- the hero section (first)--> */}
        <div className="w-auto mx-2 mb-8 fadeInTop lg:w-full lg:mx-16">
          <div className="object-cover bg-gray-200 bg-opacity-[0.50]">
            <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
              international
            </div>
            <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
              <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                <a href="/news_details.html">
                  Recordings of Global Silence Retreat *(November 19-20) now
                  availabe
                </a>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                  <div className="mr-2">posted</div>
                  <div className="mx-2">19-20 November</div>
                </div>
              </div>

              <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                <a href="/news_details.html">Avyakt BapDada</a>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                  <div className="mr-2">posted</div>
                  <div className="mx-2">10-11 November</div>
                </div>
              </div>

              <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                <a href="/news_details.html">Dewali Festival</a>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                  <div className="mr-2">posted</div>
                  <div className="mx-2">5-8 November</div>
                </div>
              </div>

              <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                <a href="/news_details.html">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </a>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                  <div className="mr-2">posted</div>
                  <div className="mx-2">5-8 November</div>
                </div>
              </div>

              <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                <a href="/news_details.html">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                  <div className="mr-2">posted</div>
                  <div className="mx-2">5-8 November</div>
                </div>
              </div>
            </div>
            <div className="py-8">
              <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                <img
                  className="w-8 md:w-12"
                  src="./img/icons/ArrowDown.png"
                  alt=""
                />
              </h1>
            </div>
          </div>

          {/* <!-- second child --> */}
          <div className="w-full md:ml-auto">
            {/* <!-- second section (parent) --> */}
            <div className="justify-between w-full my-4 lg:flex">
              <div className="w-full max-w-auto lg:w-[48%]">
                {/* <!-- second section (first box-left ) --> */}
                <div className="relative w-full pb-16 my-4 bg-gray-200 fadeInLeft h-fit">
                  <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                    Madhuban news
                  </div>
                  <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                    <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                      <a href="/news_details.html">
                        Recordings of Global Silence Retreat *(November 19-20)
                        now availabe
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">19-20 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Avyakt BapDada</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">10-11 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Dewali Festival</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">5-8 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">5-8 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">5-8 November</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-8">
                    <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                      <img
                        className="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>
              </div>

              {/* <!-- right section (parent) --> */}
              <div className="fadeInRight w-full max-w-auto lg:w-[48%]">
                {/* <!-- right section (first box) --> */}
                <div className="relative w-full pb-16 my-4 bg-gray-200 h-fit">
                  <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                    special focus news
                  </div>
                  <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                    <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                      <a href="/news_details.html">
                        Recordings of Global Silence Retreat *(November 19-20)
                        now availabe
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">19-20 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Avyakt BapDada</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">10-11 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Dewali Festival</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">5-8 November</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-8">
                    <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                      <img
                        className="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>

                {/* <!-- right section (second box) --> */}

                <div className="relative w-full pb-16 my-4 bg-gray-200 h-fit">
                  <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                    transitions
                  </div>

                  <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                    <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                      <a href="/news_details.html">
                        Recordings of Global Silence Retreat *(November 19-20)
                        now availabe
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">19-20 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Avyakt BapDada</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">10-11 November</div>
                      </div>
                    </div>

                    <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                      <a href="/news_details.html">Dewali Festival</a>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
                        <div className="mr-2">posted</div>
                        <div className="mx-2">5-8 November</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-8">
                    <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                      <img
                        className="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- second section (parent) --> */}
            <div className="justify-between w-full my-4 lg:flex">
              <div className="w-full max-w-auto lg:w-[48%] lg:mt-[-22rem] xl:mt-[-22rem] 2xl:mt-[-19rem]">
                {/* <!-- right section (second box-right) --> */}
                <div className="relative w-full my-4 h-fit">
                  <div className="flex items-center mb-0 text-slate-50 cursor-pointer bg-gold1 filosofia_italic">
                    <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                      regional websites
                    </div>
                    <div className="invisible ml-auto">
                      <img
                        className="object-cover w-4 h-auto md:w-8"
                        src="../img/linksIcons/asset1.png"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* <!--accordion child--> */}
                  <div className="mx-auto bg-slate-50">
                    {/* <!--accordion child 1--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            North America
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 2--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            South America
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 3--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            Europe
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 4--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            Asia
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 5--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            Africa
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 6--> */}
                    <div className="w-full my-2 md:m-2 md:ml-auto">
                      <div className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1">
                        <div className="">
                          <img
                            className="invisible w-1"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div className="mb-0 cursor-pointer text-gold1">
                          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
                            Australia
                          </h1>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-gray-200 accordionChildBody">
                        <div className="p-2 pl-4 mb-8 metropolis_medium md:pl-8 md:p-4">
                          <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px] mt-2">
                            <a href="/news_details.html">
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Avyakt BapDada</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div className="py-2 text-lg text-redfull md:text-2xl xl:text-3xl">
                            <a href="/news_details.html">Dewali Festival</a>
                          </div>
                          <div>
                            <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                              <div className="mr-2">posted</div>
                              <div className="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mx-auto my-8">
                          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
                            <img
                              className="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
