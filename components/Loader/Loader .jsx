import React from "react";
import ContentLoader from "react-content-loader";

export default function AccordionLoader() {
  return (
    <>
      <ContentLoader
        speed={2}
        width="100%"
        height="200"
        viewBox="0 0 300 30"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="400" height="150" />
      </ContentLoader>
    </>
  );
}

export function SpecialDayLoader() {
  return (
    <>
      <ContentLoader
        speed={2}
        width="100%"
        height="400"
        viewBox="0 0 300 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="400" height="150" />
      </ContentLoader>
    </>
  );
}

export function CalendarLoader() {
  return (
    <>
      <ContentLoader
        speed={2}
        width="100%"
        height="400"
        viewBox="0 0 300 120"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="400" height="150" />
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="4" y="2" rx="1" ry="1" width="400" height="150" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width="100%"
          height="400"
          viewBox="0 0 300 120"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
