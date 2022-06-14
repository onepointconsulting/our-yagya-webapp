import { useTranslation } from "react-i18next";

const newsDataInternational = [
  {
    link: "/",
    label:
      "Recordings of Global Silence Retreat *(November 19-20) now availabe",
    date: "19-20 November",
  },

  {
    link: "/",
    label: "Avyakt BapDada    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Dewali Festival    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.    ",
    date: "19-20 November",
  },
];

const dataMadhubanNews = [
  {
    link: "/",
    label:
      "Madhuban News  Recordings of Global Silence Retreat *(November 19-20) now availabe",
    date: "19-20 November",
  },

  {
    link: "/",
    label: "Avyakt BapDada    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Dewali Festival    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.    ",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.    ",
    date: "19-20 November",
  },
];
const News = () => {
  const { t } = useTranslation();

  return (
    <div class="mt-4">
      <div class="newsBg lg:flex justify-between">
        {/* <!-- opening icon --> */}
        <div id="mainSide" class="sticky top-16 xss:top-16 lg:top-16 z-50">
          <div
            class="left-0 top-20 xs:top-24 md:top-28 md:static mt-1 md:mt-6 lg:mt-0"
            style={{ zIndex: "1" }}
          >
            <div class="bg-darkGray p-2 w-11 flex justify-center items-center md:w-14 lg:w-16 xl:w-24 cursor-pointer lg:h-20 xl:h-24">
              <img
                id="openbtn1"
                class="w-8 md:w-12 lg:w-auto mx-auto"
                src="../img/Layer.png"
                alt="opening sidebar menu"
              />
            </div>
          </div>

          {/* <!-- HIdden all time --> */}
          <div class="hidden md:block md:invisible mt-0">
            <div class="w-16"></div>
          </div>
        </div>

        {/* <!-- the hero section (first)--> */}
        <div class="fadeInTop w-auto lg:w-full ml-12 xs:ml-16 lg:ml-none mx-2 lg:mx-16 mb-8">
          <div class="object-cover bg-gray-200 bg-opacity-[0.50]">
            <div class="filosofia_italic bg-button-color text-white p-2 text-3xl md:text-4xl xl:text-6xl pl-4 md:pl-8 capitalize">
              international
            </div>
            <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
              {newsDataInternational.map((data, i) => {
                return (
                  <>
                    <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                      <a>{t(data.label)}</a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2"> {t(data.date)}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div class="py-8">
              <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                <img
                  class="w-8 md:w-12"
                  src="./img/icons/ArrowDown.png"
                  alt=""
                />
              </h1>
            </div>
          </div>

          {/* <!-- second child --> */}
          <div class="w-full md:ml-auto">
            {/* <!-- second section (parent) --> */}
            <div class="lg:flex justify-between w-full my-4">
              <di class="w-full max-w-auto lg:w-[48%]">
                {/* <!-- second section (first box-left ) --> */}
                <div class="fadeInLeft bg-gray-200 w-full relative my-4 pb-16 h-fit">
                  <div class="filosofia_italic bg-button-color text-white p-2 text-3xl md:text-4xl xl:text-6xl pl-4 md:pl-8 capitalize">
                    Madhuban news
                  </div>
                  {/* start the second section */}
                  <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                    {dataMadhubanNews.map((data, i) => {
                      return (
                        <>
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>{t(data.label)}</a>
                          </div>
                          <div>
                            <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2"> {t(data.date)}</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div class="absolute bottom-8 right-0 left-0">
                    <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                      <img
                        class="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>
              </di>

              {/* <!-- right section (parent) --> */}
              <di class="fadeInRight w-full max-w-auto lg:w-[48%]">
                {/* <!-- right section (first box) --> */}
                <div class="bg-gray-200 w-full relative my-4 pb-16 h-fit">
                  <div class="filosofia_italic bg-button-color text-white p-2 text-2xl md:text-4xl xl:text-6xl pl-4 md:pl-8">
                    special focus news
                  </div>
                  <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                    <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                      <a>
                        Recordings of Global Silence Retreat *(November 19-20)
                        now availabe
                      </a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">19-20 November</div>
                      </div>
                    </div>

                    <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                      <a>Avyakt BapDada</a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">10-11 November</div>
                      </div>
                    </div>

                    <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                      <a>Dewali Festival</a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">5-8 November</div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-8 right-0 left-0">
                    <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                      <img
                        class="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>

                {/* <!-- right section (second box) --> */}

                <div class="bg-gray-200 w-full relative my-4 pb-16 h-fit">
                  <div class="filosofia_italic bg-button-color text-white p-2 text-2xl md:text-4xl xl:text-6xl pl-4 md:pl-8">
                    transitions
                  </div>

                  <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                    <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                      <a>
                        Recordings of Global Silence Retreat *(November 19-20)
                        now availabe
                      </a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">19-20 November</div>
                      </div>
                    </div>

                    <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                      <a>Avyakt BapDada</a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">10-11 November</div>
                      </div>
                    </div>

                    <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                      <a>Dewali Festival</a>
                    </div>
                    <div>
                      <div class="flex items-center text-sm text-date-color md:text-base lg:text-xl xl:text-2xl">
                        <div class="mr-2">posted</div>
                        <div class="mx-2">5-8 November</div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-8 right-0 left-0">
                    <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                      <img
                        class="w-8 md:w-12"
                        src="./img/icons/ArrowDown.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>
              </di>
            </div>

            {/* <!-- second section (parent) --> */}
            <div class="lg:flex justify-between w-full my-4">
              <di class="w-full max-w-auto lg:w-[48%] lg:mt-[-22rem] xl:mt-[-22rem] 2xl:mt-[-19rem]">
                {/* <!-- right section (second box-right) --> */}
                <div class="w-full relative my-4 h-fit">
                  <div class="cursor-pointer mb-0 flex items-center text-white bg-gold1 filosofia_italic">
                    <div class="filosofia_italic bg-button-color text-white p-2 text-3xl md:text-4xl xl:text-6xl pl-4 md:pl-8 capitalize">
                      regional websites
                    </div>
                    <div class="ml-auto invisible">
                      <img
                        class="object-cover h-auto w-4 md:w-8"
                        src="../img/linksIcons/asset1.png"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* <!--accordion child--> */}
                  <div class="mx-auto bg-white">
                    {/* <!--accordion child 1--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            North America
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 2--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            South America
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 3--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            Europe
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 4--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            Asia
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 5--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            Africa
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* <!--accordion child 6--> */}
                    <div class="my-2 md:m-2 w-full md:ml-auto">
                      <div class="accordionChildHeader flex items-center py-1 xs:py-4 md:py-8 h-12 cursor-pointer mx-auto md:mx-0 text-gold1 border-2 border-gold1">
                        <div class="">
                          <img
                            class="w-1 invisible"
                            src="../img/svg/Webcsat.svg"
                            alt=""
                          />
                        </div>

                        <div class="cursor-pointer mb-0 text-gold1">
                          <h1 class="filosofia_italic text-gold1 p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-3 md:pl-6 capitalize">
                            Australia
                          </h1>
                        </div>
                      </div>

                      <div class="accordionChildBody overflow-hidden bg-gray-200">
                        <div class="metropolis_medium pl-4 md:pl-8 p-2 md:p-4 mb-8">
                          <div class="text-redfull text-lg py-2 md:text-3xl xl:text-4xl mt-2">
                            <a>
                              Recordings of Global Silence Retreat *(November
                              19-20) now availabe
                            </a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">19-20 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Avyakt BapDada</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">10-11 November</div>
                            </div>
                          </div>

                          <div class="text-redfull text-lg py-2 md:text-2xl xl:text-3xl">
                            <a>Dewali Festival</a>
                          </div>
                          <div>
                            <div class="flex items-center text-date-color text-lg md:text-xl xl:text-2xl">
                              <div class="mr-2">posted</div>
                              <div class="mx-2">5-8 November</div>
                            </div>
                          </div>
                        </div>

                        <div class="flex justify-center mx-auto my-8">
                          <h1 class="cursor-poainter text-5xl flex justify-center text-gray-400 text-center">
                            <img
                              class="w-8 md:w-12"
                              src="./img/icons/ArrowDown.png"
                              alt=""
                            />
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </di>

              {/* <!-- right section (parent) --> */}
              <di class="w-full max-w-auto lg:w-[48%]">
                <div class="flex justify-between items-center bg-gold1 w-full my-4 h-fit">
                  <div class="flex lg:block">
                    <div class="filosofia_italic text-white p-2 text-2xl md:text-4xl xl:text-6xl xs:pl-2 md:pl-8">
                      for, CCs, NCs, NCTs,
                    </div>
                    <div class="filosofia_italic text-white p-2 text-2xl md:text-4xl xl:text-6xl xs:pl-2 md:pl-8">
                      and Board Members
                    </div>
                  </div>
                  <div class="mr-3 md:mr-8">
                    <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                      <img
                        class="w-7 md:w-10 xl:w-12"
                        src="../img/Lock.png"
                        alt=""
                      />
                    </h1>
                  </div>
                </div>
              </di>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
