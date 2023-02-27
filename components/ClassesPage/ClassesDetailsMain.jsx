import React from "react";
import Audio from "./Audio";

export default function ClassesDetailsMain() {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between py-6 mx-2 md:items-center md:mx-8">
        <div className="flex items-baseline md:items-center">
          <div className="flex flex-col items-start ml-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-xl text-gold1 xs:text-3xl md:text-4xl xl:text-6xl filosofia_italic">
                Power of Silence |{" "}
              </h1>
            </div>
            <h1 className="text-xl text-gold1 xs:text-3xl md:text-4xl xl:text-6xl filosofia_italic md:ml-2">
              {" "}
              Dadi Janki
            </h1>
            <div></div>
            <div>
              <p className="text-lg md:text-4xl filosofia_regular text-gold1 md:pl-4">
                {" "}
                (HINDI){" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5">
          <div className="relative flex flex-col items-center pl-2 pr-2 cursor-pointer justify-evenly lg:m-auto md:pl-3 md:pr-3">
            <img
              className="w-8 lg:w-9 xl:w-14"
              src="../img/icons/SpeakerBio_ICON.png"
              alt="share btn"
            />
            <p className="text-[8px] text-center text-gray-400 md:text-lg">
              speaker bio
            </p>
          </div>

          <div className="relative pl-2 pr-2 cursor-pointer lg:m-auto md:pl-3 md:pr-3">
            <img
              className="w-12 lg:w-11 xl:w-16"
              src="../img/svg/Download.svg"
              alt="download drop"
            />

            {/* <!--  Drop down --> */}
            <div
              className="absolute right-0 top-auto z-10 hidden bg-white w-44 h-min"
              style={{ transition: "0.3s" }}
            >
              <ul className="py-1 transition ease-in-out delay-150 border border-gray-300 divide-y">
                <li className="flex justify-around p-1 text-center cursor-pointer">
                  <img src="../img/icons/VideoIcon.png" alt="" />

                  <a
                    href="#"
                    className="block px-2 py-1 text-sm text-gray-400 metropolis_medium"
                  >
                    download video
                  </a>
                </li>

                <li className="flex justify-around p-1 text-center cursor-pointer">
                  <img src="../img/icons/AudioIcon.png" alt="" />

                  <a
                    href="#"
                    className="block px-2 py-1 text-sm text-gray-400 metropolis_medium"
                  >
                    download audio
                  </a>
                </li>

                <li className="flex justify-around p-1 text-center cursor-pointer">
                  <img src="../img/icons/PDFIcon.png" alt="" />

                  <a
                    href="#"
                    className="block px-2 py-1 text-sm text-gray-400 metropolis_medium"
                  >
                    download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-2 pr-2 cursor-pointer lg:m-auto md:pl-3 md:pr-3">
            <img
              className="w-9 lg:w-9 xl:w-12"
              src="../img/svg/Share.svg"
              alt="share btn"
            />
          </div>
        </div>
      </div>

      {/* <!-- Video section --> */}
      <div className="flex mx-2 bg-gray50 md:mx-8 ">
        {/* <!-- watch icon - left  --> */}
        <div className="p-2 md:p-4 m-2 md:m-4">
          <img
            className="w-12 lg:w-9 xl:w-12"
            src="../img/svg/Watch.svg"
            alt=""
          />
        </div>

        {/* <!--  video section --> */}
        <div className="w-full py-6 ml-2 mr-4 lg:w-7/12 xl:w-1/2 xs:mr-8 lg:mr-0 lg:ml-8">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0 rounded-sm shadow-xl"
              src="https://www.youtube.com/embed/U5Y0OCak-kY"
              allowFullScreen
            ></iframe>
          </div>

          {/* <!-- Video Details --> */}
          <div className="flex justify-between pt-4">
            <div>
              <div className="text-sm font-semibold text-gray-500 video_title md:text-lg">
                <strong>Power if Silence</strong>
              </div>
              <div className="text-sm text-gray-500 video_title md:text-lg">
                <span>Speaker: Dadi Janki</span>
              </div>
            </div>

            <div className="text-sm text-right text-gray-500 video_title md:text-lg">
              <div>7 November 202</div>
              <div>Duration: 1:55:21</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <!-- audio section --> */}
        <div className="flex mx-2 my-8 bg-gray50 md:mx-8 py-11 items-center">
          {/* <!-- watch icon - left  --> */}
          <div className="p-2 md:p-4 m-2 md:m-4">
            <img
              className="w-12 lg:w-9 xl:w-12"
              src="../img/svg/Listen.svg"
              alt=""
            />
          </div>

          <div className="w-full ml-2 mr-2 lg:w-7/12 xl:w-1/2 md:mr-8 lg:mr-0 lg:ml-8">
            <div>
              <Audio />
            </div>
          </div>
        </div>

        {/* <!-- start reading section --> */}
        <div className="flex py-6 mx-2 mt-6 mb-12 bg-gray50 md:mx-8">
          {/* <!-- start reading icon - left  --> */}
          <div className="p-2 md:p-4 m-2 md:m-4">
            <img
              className="w-12 lg:w-9 xl:w-12"
              src="../img/svg/Read.svg"
              alt=""
            />
          </div>

          {/* <!-- end reading icon left  --> */}
          <div className="w-full ml-2 mr-2 lg:w-7/12 xl:w-1/2 md:mr-8 lg:mr-0 lg:ml-8">
            <div className="overflow-auto bg-white reading_articale rounded-xl drop-shadow-md">
              <div className="justify-between flex-none p-4 pt-4 md:flex">
                {/* <!-- profile ipicture --> */}
                <img
                  className="float-left object-cover w-20 h-20 ml-1 mr-2 rounded-full"
                  src="https://randomuser.me/api/portraits/women/34.jpg"
                  alt=""
                />

                <div className="ml-4">
                  {/* <!-- start -> Speaker details --> */}
                  <div className="text-base speaker_lists text-redfull md:text-xl">
                    Power of Silence
                  </div>

                  <div className="text-base speaker_lists text-redfull md:text-xl">
                    Dadi Janki(HINDI)
                  </div>

                  <div className="text-sm text-gray-700 speaker_lists md:text-base">
                    7 November 2021
                  </div>

                  {/* <!-- end -> Speaker details --> */}

                  {/* <!-- start paragraph --> */}
                  <div
                    className="h-auto mt-4 text-justify"
                    style={{ height: " 22rem" }}
                  >
                    "Yoga" in a general sense means a mental connection or
                    union, achieved through remembrance. Whenever someone or
                    something is being remembered, then the soul is having yoga
                    with that person or thing. Yoga is a power which we are in
                    fact constantly using, but not in a conscious, beneficial
                    way. "Yoga" in a general sense means a mental connection or
                    union, achieved through remembrance. Whenever someone or
                    something is being remembered, then the soul is having yoga
                    with that person or thing. Yoga is a power which we are in
                    fact constantly using, but not in a conscious, beneficial
                    way. "Yoga" in a general sense means a mental connection or
                    union, achieved through remembrance. Whenever someone or
                    something is being remembered, then the soul is having yoga
                    with that person or thing. Yoga is a power which we are in
                    fact constantly using, but not in a conscious, beneficial
                    way. "Yoga" in a general sense means a mental connection or
                    union, achieved through remembrance. Whenever someone or
                    something is being remembered, then the soul is having yoga
                    with that person or thing. Yoga is a power which we are in
                    fact constantly using, but not in a conscious, beneficial
                    way.
                    <h2>Who am I?</h2>
                    <span>
                      Not everything is explainable in physical terms. There are
                      the faculties of thinking, desiring, deciding which are
                      non-physical, but nevertheless real. These are the
                      faculties of the "consciousness" or "soul" (Hindi "atma").
                      The soul is generally represented by the so-called
                      "third-eye", the eye of consciouness. The location of the
                      soul is in the middle of the forehead; generally where the
                      "bindi" is applied.
                    </span>
                    <span>
                      The soul expresses itself through the sense organs of the
                      body. This is similar to someone driving a car.
                    </span>
                    <span>
                      "Human being" means the consciousness, the soul or
                      "being", experiencing life through the insentient body.{" "}
                    </span>
                  </div>
                  {/* <!-- end paragraph --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
