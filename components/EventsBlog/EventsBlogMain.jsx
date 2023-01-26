import React from "react";
import { getChildrenCountFirstCategory } from "../../lib/eventsAdapter";
import { imageAdapter } from "../../lib/imageAdapter";
import Slider from "../Slider/Slider";

export default function EventsBlogMain({ data }) {

  return (
    <>
      <Slider />

      <div
        className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
      >
        {/* Featured event with the event background  */}
        <div className="w-full">
          EVENTS BLOG PAGE
        </div>
      </div>

    </>
  );
}
