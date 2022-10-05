import Link from 'next/link'

const SearchResult = () => {
  return (
    <div>
      {/* <!-- the speakers list section --> */}
      <div className="mt-4 fadeInLeft md:-mt-4 lg:mt-0">
        <Link href="/details">
          <a>
            <div className="flex-row justify-between pt-1 pb-1 lg:flex md:mr-3 lg:pb-2 lg:pt-2 bg-gray40">
              <div className="flex items-center w-auto lg:w-3/5 xl:w-3/6">
                <img
                  className="float-left object-cover my-2 lg:my-4 w-12 h-12 mx-2 rounded-full md:mx-4 xs:h-16 md:h-24 lg:h-28 xs:w-16 md:w-24 lg:w-28"
                  src="https://i.ytimg.com/vi/jbd0_pav3EY/maxresdefault.jpg"
                  alt=""
                />
                <div>
                  <div className="flex flex-col md:flex-row lg:flex-col">
                    <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      Values for Life Series: Royalty
                    </div>
                    <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      Santosh Didi(ENG)
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray70 xs:text-base md:text-base lg:text-lg">
                    12 November 2021{" "}
                    <div className="md:ml-4">
                      6:30-8:30pm <span className="underline">EDT</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- flex right --> */}
              <div className="flex justify-between mt-2 text-center mx-2md:mx-0">
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Watch.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Listen.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Read.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-[70%] md:w-[90%] lg:w-11 xl:w-14"
                    src="../img/svg/Download.png"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Share.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </a>
        </Link>

        {/* // <!-- section 2 --> */}
        <Link href="/details">
          <a>
            <div className="flex-row justify-between pt-1 pb-1 lg:flex md:mr-3 lg:pb-2 lg:pt-2">
              <div className="flex items-center w-auto lg:w-3/5 xl:w-3/6">
                <img
                  className="float-left object-cover my-2 lg:my-4 w-12 h-12 mx-2 rounded-full md:mx-4 xs:h-16 md:h-24 lg:h-28 xs:w-16 md:w-24 lg:w-28"
                  src="https://i.ytimg.com/vi/jbd0_pav3EY/maxresdefault.jpg"
                  alt=""
                />
                <div>
                  <div className="flex flex-col md:flex-row lg:flex-col">
                    <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      Values for Life Series: Royalty
                    </div>
                    <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      Santosh Didi(ENG)
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray70 xs:text-base md:text-base lg:text-lg">
                    12 November 2021{" "}
                    <div className="md:ml-4">
                      6:30-8:30pm <span className="underline">EDT</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- flex right --> */}
              <div className="flex justify-between mt-2 text-center mx-2md:mx-0">
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Watch.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Listen.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Read.svg"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-[70%] md:w-[90%] lg:w-11 xl:w-14"
                    src="../img/svg/Download.png"
                    alt=""
                  />
                </div>
                <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3">
                  <img
                    className="w-7 md:w-9 xl:w-12"
                    src="../img/svg/Share.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      {/* <!-- Events --> */}
      <div className="flex items-center justify-start mt-4 mr-0 md:mt-8 lg:mt-12 md:ml-3 md:justify-start">
        <h1 className="pt-4 text-3xl capitalize xss:text-4xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
          events
        </h1>
      </div>

      <Link href="/details">
        <a className="my-12">
          <div className="flex w-full bg-white justify-betwen">
            <div className="flex items-center justify-center ml-auto">
              <img
                className="search-result max-w-[5rem] md:max-w-[8rem] float-left object-cover ml-2 mr-2 md:mr-4 md:ml-4"
                src="https://i.ytimg.com/vi/jbd0_pav3EY/maxresdefault.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-col-reverse justify-between w-full py-2 mx-2 md:mx-4 lg:mx-8">
              <div className="flex items-center justify-between pr-4 mb-0 text-xs text-gray70 xs:text-base md:text-base lg:text-lg">
                12 November 2021{" "}
                <div className="md:ml-4">
                  6:30-8:30pm <span className="underline">EDT</span>
                </div>
              </div>
              <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Rakshabamdahan: The links of LovesLos Angeles
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/* <!-- Events --> */}
      <div className="flex items-center justify-start mt-4 mr-0 md:mt-8 lg:mt-12 md:ml-3 md:justify-start">
        <h1 className="pt-4 text-3xl capitalize xss:text-4xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
          Recources{" "}
        </h1>
      </div>

      <Link href="/details">
        <a className="my-12">
          <div className="flex w-full bg-white justify-betwen">
            <div className="flex items-center justify-center ml-auto">
              <img
                className="float-left object-cover ml-2 mr-2 search-result max-w-[5rem] md:max-w-[8rem] md:mr-4 md:ml-4"
                src="../img/Bless.png"
                alt=""
              />
            </div>

            <div className="flex flex-col-reverse justify-between w-full py-2 mx-2 md:mx-4 lg:mx-8">
              <div className="flex items-center justify-between pr-4 mb-0 text-xs text-gray70 xs:text-base md:text-base lg:text-lg">
                Uploaded August 4, 2022
              </div>

              <div className="text-redfull text-ms xs:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Rakshabamdahan: bless 2015
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="flex justify-between mx-4 my-12">
        <div></div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 p-4 text-center rounded-full cursor-pointer bg-redfull xs:w-16 lg:w-16 xs:h-16 lg:h-16">
            <img
              className="mt-[-7px] xs:mt-[-10px] lg:mt-[-10px]"
              src="../img/svg/+.png"
              alt="pluc icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
