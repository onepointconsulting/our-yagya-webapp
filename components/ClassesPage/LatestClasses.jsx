import React from "react";
import GoldenButtons from "./GoldenButtons";
import ClassSpeaker from "./ClassSpeaker";

export default function LatestClasses() {
  return (
    <>
      <div className="overflow-auto whitespace-nowrap flex items-center py-2 my-4 md:my-6 metropolis_medium">
        <a 
          href="#home"
          className="inline-flex text-white text-center no-underline mx-2"
        >
          <h1 className="text-2xl xss:text-3xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
            Latest Classes & talks
          </h1>
        </a>
      </div>
    </>
  );
}
