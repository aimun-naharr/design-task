import React from "react";
import Hero from "../../components/home/hero/Hero";
import Services from "../../components/home/Services";
import TopService from "../../components/home/top-service/TopService";
import Footer from "../../components/layouts/Footer";

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <div className="relative">
        <div className="absolute w-full h-full bg-orange top-0 left-0 custom-clip-path "></div>
        <Services />
        <TopService />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
