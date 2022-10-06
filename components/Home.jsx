import React from "react";
import BackToTop from "./Footer/BackToTop";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div className="bg-green-500 h-screen">
      <div className="absolute bottom-16 right-1">
        <BackToTop />
      </div>
      <Footer />
    </div>
  );
}
