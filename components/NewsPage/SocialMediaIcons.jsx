import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function SocialMediaIcons({ }) {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setSocialOpen(!socialOpen)} className='cursor-pointer'>
        <img className="w-8 md:w-12 lg:w-16 mx-auto" src="/img/Share.png" alt="" />
        <h3 className="text-center text-gray-500 text-sm md:text-lg">Share</h3>
      </div>
      {socialOpen && (
        <div className="absolute right-3 lg:-right-20 xl:-right-24 -top-72 z-10 share-popup open">
          <div className="flex flex-col float-right w-full">
           
              <FacebookShareButton url={"http://localhost:3000/single_event/45"}>
                <FacebookIcon className='w-6 lg:w-8  h-6 lg:h-8 my-[0.59rem] lg:my-2' size={30} round />
              </FacebookShareButton>

              <TwitterShareButton url={"http://localhost:3000/single_event/45"}>
                <TwitterIcon className='w-6 lg:w-8  h-6 lg:h-8 my-[0.59rem] lg:my-2' size={30} round />
              </TwitterShareButton>
              
              <LinkedinShareButton url={"http://localhost:3000/single_event/45"}>
                <LinkedinIcon className='w-6 lg:w-8  h-6 lg:h-8 my-[0.59rem] lg:my-2' size={30} round />
              </LinkedinShareButton>

              <PinterestShareButton url={"http://localhost:3000/single_event/45"}>
                <PinterestIcon className='w-6 lg:w-8  h-6 lg:h-8 my-[0.59rem] lg:my-2' size={30} round />
              </PinterestShareButton>

              <RedditShareButton url={"http://localhost:3000/single_event/45"}>
                <RedditIcon className='w-6 lg:w-8  h-6 lg:h-8 my-[0.59rem] lg:my-2' size={30} round />
              </RedditShareButton>
      
          </div>
        </div>
      )}
    </div>
  );
}
