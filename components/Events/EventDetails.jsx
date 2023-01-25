import React from 'react';

const EventDetails = () => {
  const eventDetailsData = [
    {
      title: "Experience Peace and Calm in Your Own Home \nAngel[Los Angeles]",
      date: "Thursday, 15 December 2021 6:30-8:30pm EDT",
      img: "/img/Event_1.png",
      description:"Prerequisite: This class is suitable for those who have completed the BK Meditation Introductory and Intermediate courses.",
    },
    {
      title: "Experience Peace and Calm in Your Own Home \nAngel[Los Angeles]",
      date: "Thursday, 15 December 2021 6:30-8:30pm EDT",
      img: "https://beejaacademy.com/images/course/Ethics_Values_Positive.webp",
      description:"Prerequisite: This class is suitable for those who have completed the BK Meditation Introductory and Intermediate courses.",
    },
    
  ];

  return (
  <div className="w-full h-auto">
    {eventDetailsData.map((data, index) => ( 
           <div className="mx-4 md:mx-8 my-8">
        <div className="relative">
            <img className="w-full lg:w-[80%]" src={data.img} alt="" />
        </div>
        
        {/* <!-- online events section 1 --> */}
        <div className="relative my-4">
            <div className="flex justify-between bg-white metropolis_medium">
                <div className="flex w-full md:w-4/5 lg:w-5/6 xl:w-5/6">
                    <div className="w-full">
                        <h1 className="text-lg font-medium text-red-500 md:text-xl lg:text-[1.4rem] xl:text-4xl">
                           {data.title}
                        </h1>

                        <div className="mt-4">
                            <h4 className="text-[14px] text-gray-400 md:text-base lg:text-xl xl:text-4xl">
                                <p className="md:leading-[2rem] lg:leading-[3.5rem]">
                                   {data.date}
                                </p>
                            </h4>

                            <h4 className="text-base text-gray-400 md:text-xl lg:text-xl xl:text-4xl">
                                <p className="md:leading-[2rem] lg:leading-[3.5rem]">
                                    {data.description}
                                </p>


                            </h4>

                        </div>
                    </div>
                </div>

                <div className="w-32 md:w-36 lg:w-72">
                    <div
                        className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center">
                        <div>
                            <img className="w-4 xs:w-6 lg:w-12" src="../img/icons8-info-50.png" alt="" />
                        </div>
                        <div className="m-auto mt-auto text-sm text-right text-white md:text-base lg:text-xl xl:text-2xl">
                            More Info
                        </div>
                    </div>

                    <div
                        className="flex rounded-md bg-gold1 items-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
                        <div>
                            <img className="w-4 xs:w-6 lg:w-12" src="../img/icons8-pencil-64.png" alt="" />
                        </div>
                        <div className="m-auto text-white text-sm mt-auto md:text-base lg:text-2xl xl:text-3xl">
                            join now
                        </div>
                    </div>
                    <div id="share_btn" className="float-right mt-2 mr-2 cursor-pointer lg:mt-4 lg:mr-4 text-center">
                        <img className="w-8 md:w-12 lg:w-16" src="../img/Share.png" alt="" />
                        <h3 className="text-center text-gray-500 text-sm md:text-lg">Share</h3>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
      )
    )}
 

 
  </div>
  )
}

export default EventDetails;
