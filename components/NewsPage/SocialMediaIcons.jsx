import { useState } from "react";

const socialMediaData = [
  {
    image: "icons8-facebook.svg",
    buttonStyle: "bg-social_media_btn_fac"
  },
  {
    image: "icons8-twitter.svg",
    buttonStyle: "bg-social_media_btn_twi"
  },
  {
    image: "icons8-mail.svg",
    buttonStyle: "bg-social_media_btn_mee"
  },
  {
    image: "icons8-android-os.svg",
    buttonStyle: "bg-social_media_btn_and"
  },
  {
    image: "icons8-linkedin.svg",
    buttonStyle: "bg-social_media_btn_linkd"
  },
  {
    image: "icons8-spotify.svg",
    buttonStyle: "bg-social_media_btn_spo"
  },
  {
    image: "icons8-plus.svg",
    buttonStyle: "bg-social_media_btn_hos"
  }
]

export default function SocialMediaIcons({ eventIndex }) {
  const [socialOpen, setSocialOpen] = useState(false);
  const social = () => {
    setSocialOpen(!socialOpen);
  };

  return (
    <div className="relative">
      <div onClick={() => setSocialOpen(!socialOpen)} >
        <img className="w-8 md:w-12 lg:w-16" src="/img/Share.png"
          alt="" />
        <h3 className="text-center text-gray-500 text-sm md:text-lg">Share</h3>
      </div>
      {socialOpen && (
        <div className="absolute right-0 xl:-right-24 top-12 md:top-20 lg:top-24 xl:top-0 z-10 share-popup open">
          <div className="flex flex-col float-right w-full">
            {socialMediaData.map((sd, i) => {
              return <a key={i} href="#" className={`p-1 md:p-3 h-auto text-white fa socialMediaClass ${sd.buttonStyle}`}>
                <img className="w-9 xl:w-11 h-9 xl:h-11 mx-auto" src={`/img/svg/${sd.image}`} alt="" />
              </a>
            })}
          </div>
        </div>
      )}

    </div>
  );
}
