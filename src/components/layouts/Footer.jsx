import React from "react";
import Button from "../Button";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-banana py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-4xl font-bold">
            <h2>Vulputate et pulvinar ethre</h2>
            <h2>Suspendisse tellus consectetur</h2>
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

        {/* copyright */}
        <div className="flex md:flex-row flex-col items-center justify-between py-10 text-sm">
          <p className="text-dark  font-semibold">
            Copyright © 2022 Lorem ipsum
          </p>
          <div className="divide-x-2 divide-dark">
            <a href="#" className="underline px-2">
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
