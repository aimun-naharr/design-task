import { CircleCheckBig, MoveRight } from "lucide-react";
import React from "react";
import Button from "../Button";

const Tag = ({ tag }) => {
  return (
    <div className="bg-white px-4 py-2 rounded-full flex gap-2 items-center">
      <span className="text-orange">
        <CircleCheckBig size={16} />
      </span>
      <span>{tag}</span>
    </div>
  );
};

const Hero = () => {
  const tags = [
    "Cursus Integer",
    "Integer Consequat",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];
  return (
    <div className="container flex md:flex-row flex-col items-center md:justify-between justify-center">
      {/* left */}
      <div className="md:pl-20 ">
        <h3 className="uppercase text-orange font-bold text-lg">
          risus praesent vulputate.{" "}
        </h3>
        <div className="text-6xl font-bold tracking-tight">
          <h2>Cursus Integer</h2>
          <h2>Consequat Tristique.</h2>
        </div>
        <div className="flex flex-wrap gap-2 py-8">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Button
          className={"justify-between w-56"}
          icon={<MoveRight size={18} />}
        >
          <span>Lorem ipsum </span>
        </Button>
      </div>
      {/* right */}
      <div className="max-w-[614px] w-full">
        <img src={"/heroImg.svg"} alt="hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
