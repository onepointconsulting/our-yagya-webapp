import React from "react";
import ContentLoader, { Instagram } from "react-content-loader";

export default function AccordionLoader(props) {
  return (
    <div className="w-full flex justify-center text-center">
      <ContentLoader
        speed={2}
        width={1900}
        height={460}
        viewBox="0 0 1900 460"
        backgroundColor="transparent"
        {...props}
      >
        <rect x="2" y="23" rx="8" ry="8" width="1900" height="68" />
        <rect x="2" y="101" rx="8" ry="8" width="1900" height="68" />
        <rect x="2" y="178" rx="8" ry="8" width="1900" height="68" />
        <rect x="2" y="255" rx="8" ry="8" width="1900" height="68" />
      </ContentLoader>
    </div>
  );
}

export function SpecialDayLoader(props) {
  return (
    <>
      <ContentLoader
        speed={2}
        width={1000}
        height={460}
        viewBox="0 0 1000 460"
        backgroundColor="transparent"
        {...props}
      >
        <rect x="1" y="21" rx="8" ry="8" width="1000" height="68" />
        <rect x="2" y="92" rx="8" ry="8" width="492" height="47" />
        <rect x="3" y="144" rx="8" ry="8" width="212" height="26" />
      </ContentLoader>
    </>
  );
}

export function CalendarLoader(props) {
  return (
    <>
      <ContentLoader
        speed={2}
        width={500}
        height={460}
        viewBox="0 0 500 460"
        backgroundColor="transparent"
        {...props}
      >
        <rect x="2" y="23" rx="8" ry="8" width="500" height="500" />
        <rect x="2" y="428" rx="8" ry="8" width="309" height="57" />
      </ContentLoader>
    </>
  );
}

export function FilterLoader(props) {
  return (
    <>
      <ContentLoader
        speed={2}
        width={500}
        height={460}
        viewBox="0 0 500 460"
        backgroundColor="transparent"
        {...props}
      >
        <rect x="126" y="108" rx="8" ry="8" width="500" height="34" />
        <rect x="1" y="41" rx="8" ry="8" width="102" height="279" />
        <rect x="126" y="50" rx="8" ry="8" width="500" height="34" />
        <rect x="128" y="167" rx="8" ry="8" width="500" height="34" />
        <rect x="128" y="223" rx="8" ry="8" width="500" height="34" />
        <rect x="127" y="277" rx="8" ry="8" width="500" height="34" />{" "}
      </ContentLoader>
    </>
  );
}

export function TestLoader() {
  return (
    <>
      <div className="flex justify-between w-full">
        <ContentLoader
          speed={2}
          width="100%"
          height="400"
          viewBox="0 0 300 120"
          backgroundColor="transparent"
        >
          <rect x="4" y="2" rx="1" ry="1" width="400" height="150" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width="100%"
          height="400"
          viewBox="0 0 300 120"
          backgroundColor="transparent"
        >
          <rect x="4" y="2" rx="1" ry="1" width="400" height="150" />
        </ContentLoader>
      </div>
      <div className="w-full mx-auto">
        <ContentLoader
          speed={1}
          width="100%"
          height="1000"
          viewBox="0 0 300 120"
          backgroundColor="transparent"
        >
          <rect x="2" y="15" rx="4" ry="0" width="400" height="25" />
          <rect x="2" y="50" rx="2" ry="0" width="400" height="150" />
          <rect x="2" y="15" rx="2" ry="0" width="170" height="20" />
          <rect x="60" y="230" rx="2" ry="0" width="170" height="20" />
        </ContentLoader>
      </div>
    </>
  );
}
