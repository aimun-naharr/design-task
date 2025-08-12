import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import Button from "../../Button";
import Tag from "../../Tag";
import HeroVector from "./HeroVector";

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
    <div className="container flex md:flex-row flex-col-reverse items-center md:justify-between justify-center py-10 md:py-0">
      {/* left */}
      <div className="md:pl-20 ">
        <h3 className="uppercase text-orange font-bold text-lg">
          risus praesent vulputate.{" "}
        </h3>
        <div className="md:text-6xl text-3xl font-bold ">
          <h2>Cursus Integer</h2>
          <h2 className="mt-2 flex gap-2">
            Consequat
            <motion.span
              className="typing"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Tristique.
            </motion.span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 py-8">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Button className={" md:w-56 w-full"} icon={<MoveRight size={18} />}>
          <span>Lorem ipsum </span>
        </Button>
      </div>
      {/* right */}
      <HeroVector />
    </div>
  );
};

export default Hero;
