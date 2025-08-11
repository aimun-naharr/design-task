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
    <div className="bg-orange custom-clip-path py-[10rem] relative  ">
      <div className="container flex flex-col md:flex-row items-center justify-between px-20">
        {/* left */}
        <div className="flex flex-col gap-10">
          <div className="text-5xl font-bold">
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
              className="w-56"
              variant="dark"
              icon={<MoveRight size={18} />}
            >
              Lorem ipsum
            </Button>
          </div>
        </div>
        {/* right */}
        <div>
          <img src={topService} alt="top-service" />
        </div>
      </div>
    </div>
  );
}
