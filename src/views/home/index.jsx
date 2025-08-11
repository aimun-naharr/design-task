import React from "react";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import TopService from "../../components/home/TopService";
import Footer from "../../components/layouts/Footer";

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <div className="relative">
        <div className="absolute w-full h-[70rem] bg-orange top-1/2 -translate-y-1/2 left-0  "></div>
        <Services />
        <TopService />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
