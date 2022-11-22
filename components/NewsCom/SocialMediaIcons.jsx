import React from "react";

export default function SocialMediaIcons() {
  return (
    <div
      className="absolute left-0 right-0 top-auto z-10 hidden"
      data-social-icon="opening_social_icons"
    >
      <div className="flex flex-col float-right w-full bg-yellow-400">
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_fac fa-facebook"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_twi fa-twitter"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_mee fa-spotify"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_and fa-android"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_linkd fa-linkedin"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_spo fa-spotify"
        ></a>
        <a
          href="#"
          className="h-auto text-white fa socialMediaClass bg-social_media_btn_hos fa-plus"
        ></a>
      </div>
    </div>
  );
}
