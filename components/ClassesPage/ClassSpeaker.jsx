import React from "react";

export default function Classes() {
  const searchData = [
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
  ];


  return (
    <div className="mt-4 fadeInLeft md:-mt-4 lg:mt-0">
      {searchData.map((item, index) => (
        <a href="/details.html" className="my-2">
          <div
            className={
              index % 2 === 0
                ? "flex-row justify-between md:flex bg-gray-200"
                : "flex-row justify-between md:flex bg-white"
            }
          >
            <div className="flex items-center w-auto">
              <img
                className="float-left object-cover w-12 h-12 mx-2 my-2 rounded-full lg:my-4 md:mx-4 xs:h-16  lg:h-20 xs:w-16 lg:w-20"
                src="https://i.ytimg.com/vi/jbd0_pav3EY/maxresdefault.jpg"
                alt=""
              />
              <div>
                <div className="flex flex-col text-redfull text-[12px] xs:text-ms md:text-[22px] lg:text-xl xl:text-2xl my-0  md:my-[3px] 2xl:my-[6px]">
                  <div>
                    Original date: <span>{item.originalDate} </span>
                  </div>
                  <div>
                    Published date: <span>{item.published}</span>
                  </div>
                </div>
                <div className="description text-sm md:text-sm lg:text-[1rem] pr-2 xl:text-xl text-gray-400 text-left w-auto h-fit p-0 xl:p-2">
                  {item.description}{" "}
                  <span className="py-1 px-2 bg-yellow-300">love</span> facere
                  laudantium.
                </div>
              </div>
            </div>
            {/* <!-- flex right --> */}
            <div className="flex items-center">
              <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3 flex flex-col items-center">
                <img
                  className="w-8 md:w-12 xl:w-16"
                  src="../img/icons/eye.png"
                  alt=""
                />
                <p className="text-sm lg:text-base text-gray-300">Read</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
