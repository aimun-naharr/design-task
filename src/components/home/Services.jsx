import React from "react";
import Button from "../Button";
import { MoveRight } from "lucide-react";
import { cn } from "../../lib/utils";

const ServiceCard = ({ service, i }) => {
  return (
    <div
      key={service.title}
      className={cn("flex flex-col gap-4 p-10 rounded-4xl max-w-[350px] mt-0", {
        "bg-white": i === 0 || i === 3,
        "bg-orange": i === 1 || i === 2,
      })}
    >
      <div className="w-8">
        <img src={service.icon} alt={service.title} />
      </div>
      <div className="text-5xl font-bold tracking-tighter flex gap-0.5">
        <span className="">{i + 1}</span>{" "}
        <span
          className={cn("text-orange ", {
            "text-white": i === 1 || i === 2,
            "text-orange": i === 0 || i === 3,
          })}
        >
          .
        </span>
      </div>
      <h4 className="text-xl font-bold">{service.title}</h4>
      <div className="text-lg">
        <p className=" font-semibold text-sm">{service.tag}</p>
        <p className=" text-sm font-light">{service.description}</p>
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
    <section className="  bg-dark py-[20rem] service-section">
      <div className="flex flex-col md:flex-row items-center justify-center container md:justify-between">
        {/* left */}
        <div className="max-w-[550px] flex flex-col gap-2">
          <p className="text-orange text-sm font-light">
            Quisque porttitor vitae vel amet neque scelerisque mattis.
            Consectetur nibh velit magna consectetur leo.{" "}
          </p>
          <div className="text-4xl font-bold text-white">
            <h3>Cursus Integer Conseq </h3>
            <h3>Aliquam Tristique.</h3>
          </div>
          <Button
            className={"w-56 mt-8"}
            variant="secondary"
            icon={<MoveRight size={18} />}
          >
            Lorem Ipsum
          </Button>
        </div>
        {/* right */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-10">
            <ServiceCard service={services[0]} i={0} />
            <ServiceCard service={services[2]} i={2} />
          </div>
          <div className="flex flex-col gap-10 mt-20">
            <ServiceCard service={services[1]} i={1} />
            <ServiceCard service={services[3]} i={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
