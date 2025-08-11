import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import avatar from "../../assets/avatar.png";
export default function Thought() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center bg-white relative  gap-10  py-16  px-20 rounded-4xl thought-section w-full">
      {/* image */}
      <div className="max-w-[472px] md:w-[470px]  md:rounded-full    overflow-hidden ">
        <img src={avatar} alt="avatar" className="object-cover" />
      </div>
      <div className="flex flex-col gap-6 flex-grow ">
        <h3 className=" text-4xl font-bold">What our customers thought?</h3>
        <div className="flex flex-col gap-4">
          <p className=" text-xl font-light">
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.{" "}
          </p>
          <h4 className=" font-semibold">Holly Davidson</h4>
          <div className="flex gap-4 mt-2">
            <MoveLeft className="text-dark" />
            <MoveRight className="text-orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
