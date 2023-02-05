import React from "react";

export default function SpecialDay() {
  return (
    <div className="text-xl text-gray-900 lg:border-0 border-2 border-gold1">
      <div>
        <div className="bg-white">
          <h1 className="pb-2 ml-2 text-3xl font-light filosofia_italic md:text-4xl text-gold1 md:ml-0 md:p-2">
            Special Days
          </h1>

          <div className="metropolis_medium mt-4">
            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Humans rights day
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{" "}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Christmas Day
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                10 December 2021
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{" "}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="flex justify-center py-4 text-5xl text-center text-gray-700 lg:py-6 cursor-poainter">
          <a href="/events.html">
            <img
              className="w-4 md:w-8"
              src="./img/icons/ArrowDown.png"
              alt=""
            />
          </a>
        </h1>
      </div>
    </div>
  );
}
