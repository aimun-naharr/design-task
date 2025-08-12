import { MoveRight } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import Button from "../Button";
import Thought from "./Thought";

const ServiceCard = ({ service, i, isPrimary = true }) => {
  return (
    <div
      key={service.title}
      className={cn(
        "flex flex-col gap-4 p-10 rounded-4xl md:max-w-[325px] w-full mt-0 group relative  " +
          "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark after:z-[1] z-[2] " +
          "after:rounded-full after:scale-[1] after:translate-y-full after:transition-transform after:duration-500 after:ease-in border-dark border-2",
        "hover:after:translate-y-0 hover:after:scale-[3] group-hover:text-white overflow-hidden  hover:border-dark",
        {
          "bg-white": isPrimary,
          "bg-orange": !isPrimary,
          "mb-8  lg:mb-0": i === 3,
        }
      )}
    >
      <div className="w-8 relative z-[2]">
        <img src={service.icon} alt={service.title} />
      </div>
      <div className="text-5xl font-bold tracking-tighter flex gap-0.5 relative z-[2]">
        <span className="group-hover:text-white">{i + 1}</span>{" "}
        <span
          className={cn("text-orange ", {
            "text-white group-hover:text-white": i === 1 || i === 2,
            "text-orange group-hover:text-white": i === 0 || i === 3,
          })}
        >
          .
        </span>
      </div>
      <h4 className="text-xl font-bold relative z-[2] group-hover:text-white">
        {service.title}
      </h4>
      <div className="text-lg relative z-[2] group-hover:text-white">
        <p className=" font-semibold text-sm relative z-[2] group-hover:text-white">
          {service.tag}
        </p>
        <p className=" text-sm font-light relative z-[2] group-hover:text-white">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Phasellus Vitae",
      tag: "Quisque",
      description: "Porttitor vitae vel amet ",
      icon: "./join.svg",
    },
    {
      title: "Iaculis Magna",
      tag: "Porttitor",
      description: "neque scelerisque mattis. ",
      icon: "./infinity.svg",
    },
    {
      title: "Eleifend Pulvinar ",
      tag: "Vitae",
      description: "Consectetur nibh velit ",
      icon: "./group.svg",
    },
    {
      title: "Velit Odio Phir",
      tag: "Ametneq",
      description: "magna consectetur leo. ",
      icon: "./yoga.svg",
    },
  ];
  return (
    <section className="  relative  ">
      <div className="pt-[10rem] py-[30rem]  md:pt-[20rem] md:py-[30rem] bg-dark  custom-clip-path">
        <div className="container  w-full">
          <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between gap-8 md:gap-0 w-full ">
            {/* left */}
            <div className="max-w-[550px] flex flex-col gap-2 w-full">
              <p className="text-orange text-sm font-light">
                Quisque porttitor vitae vel amet neque scelerisque mattis.
                Consectetur nibh velit magna consectetur leo.{" "}
              </p>
              <div className="md:text-5xl text-3xl font-bold text-white">
                <h3>Cursus Integer Conseq </h3>
                <h3>Aliquam Tristique.</h3>
              </div>
              <Button
                className={"md:w-56 w-full mt-8"}
                variant="secondary"
                icon={<MoveRight size={18} />}
              >
                Lorem Ipsum
              </Button>
            </div>
            {/* right */}
            <div className="sm:flex flex-wrap md:flex-nowrap md:flex-row lg:gap-10 sm:gap-6 gap-4 w-full   lg:justify-end hidden">
              <div className="flex flex-col lg:gap-10 sm:gap-6 gap-4 w-full md:w-auto">
                <ServiceCard service={services[0]} i={0} isPrimary={true} />
                <ServiceCard service={services[2]} i={2} isPrimary={false} />
              </div>
              <div className="flex md:flex-col flex-col-reverse lg:gap-10 sm:gap-6 gap-4 md:mt-20 mt-0 w-full md:w-auto">
                <ServiceCard service={services[1]} i={1} isPrimary={false} />
                <ServiceCard service={services[3]} i={3} isPrimary={true} />
              </div>
            </div>
            <div className="sm:hidden flex flex-col gap-4 w-full">
              <ServiceCard service={services[0]} i={0} isPrimary={true} />
              <ServiceCard service={services[1]} i={1} isPrimary={false} />
              <ServiceCard service={services[2]} i={2} isPrimary={true} />
              <ServiceCard service={services[3]} i={3} isPrimary={false} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:-bottom-10 -bottom-[14rem]  z-[10] left-1/2 -translate-x-1/2 lg:w-[1280px] w-full">
        <Thought />
      </div>
    </section>
  );
}
