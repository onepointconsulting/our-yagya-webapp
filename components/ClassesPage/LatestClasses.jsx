import React from "react";
import Link from "../../node_modules/next/link";

export default function LatestClasses() {
  return (
    <>
      <div className="pt-4 lg:pt-4 lg:py-2 my-2 md:my-2 lg:my-6 metropolis_medium">
        <Link 
          href="/"
          className="inline-flex text-white text-center no-underline">
          <h1 className="text-2xl xss:text-3xl md:text-5xl xl:text-6xl text-gold1 filosofia_italic">
            Latest Classes & talks
          </h1>
        </Link>
      </div>
    </>
  );
}
