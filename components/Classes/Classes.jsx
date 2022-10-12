import React from "react";
import GoldenButtons from "./GoldenButtons";
import LatestClasses from "./LatestClasses";
import Toggle from "./Toggle";

export default function Classes() {
  return (
    <div className="flex">
      <Toggle />
      <div className="w-full">
        <LatestClasses />
        <GoldenButtons />
      </div>
    </div>
  );
}
