import React from "react";
import BackToTop from "../Footer/BackToTop";
import Footer from "../Footer/Footer";
import HomeMain from "./HomeMain";
import Video from "./Video";

export default function Home() {
  return (
    <div className="bg-slate-50 h-full">
      <HomeMain />
      <Video />
      <div className="absolute bottom-16 right-1">
        <BackToTop />
      </div>
      <Footer />
    </div>
  );
}
