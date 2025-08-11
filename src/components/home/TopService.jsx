import React from "react";
import Tag from "../Tag";
import Button from "../Button";
import { MoveRight } from "lucide-react";
import topService from "../../assets/topService.png";

export default function TopService() {
  const tags = [
    "Ac viverra sed risus praesent vulputate. ",
    "Natoqu consectetur pulvinar.",
    "Sollicitudin ornare tempus nulla varius pulvinar.",
    "Varius pulvinar",
    "Natoque id tellus consectetur",
    "Vulputate et vulputate suspendisse",
  ];
  return (
    <div className="bg-orange custom-clip-path md:pt-[10rem] md:pb-[25rem] py-[12rem] relative  ">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between px-2 md:px-20">
        {/* left */}
        <div className="flex flex-col gap-10">
          <div className="md:text-5xl text-3xl font-bold">
            <h1>Cursus Integer</h1>
            <h1>Consequat Tristique.</h1>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <div>
            <Button
              className="md:w-56 w-full"
              variant="dark"
              icon={<MoveRight size={18} />}
            >
              Lorem ipsum
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="max-w-[614px] w-full mt-10 sm:mt-0">
          <img src={topService} alt="top-service" />
        </div>
      </div>
    </div>
  );
}
