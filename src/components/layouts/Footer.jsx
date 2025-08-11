import React from "react";
import Button from "../Button";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-banana py-20">
      <div className="container flex flex-col gap-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:text-4xl text-3xl font-bold">
            <h2>Vulputate et pulvinar ethre</h2>
            <h2>Suspendisse tellus consectetur</h2>
          </div>
          <div className="w-full md:w-auto">
            <Button className="md:w-56 w-full" icon={<MoveRight size={18} />}>
              Lorem ipsum
            </Button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-banana " />

        {/* copyright */}
        <div className="flex md:flex-row flex-col md:items-center justify-between md:py-10 py-6 text-sm gap-2">
          <p className="text-dark  font-semibold">
            Copyright © 2022 Lorem ipsum
          </p>
          <div className="divide-x-2 divide-dark">
            <a href="#" className="underline pr-2">
              Privacy Policy
            </a>
            <a href="#" className="underline px-2">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
