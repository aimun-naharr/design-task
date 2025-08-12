import { MoveLeft, MoveRight } from "lucide-react";
import { motion, spring } from "motion/react";
import React from "react";
import avatar from "../../assets/avatar.png";
export default function Thought() {
  return (
    <motion.div
      initial={{ color: "black", backgroundColor: "white" }}
      whileInView={{ color: "white", backgroundColor: "black" }}
      className="container flex flex-col sm:flex-row items-center justify-center bg-white relative  gap-10 py-8 md:py-16 px-6 md:px-20 rounded-4xl thought-section w-full overflow-hidden z-[2]"
    >
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0, type: spring, duration: 0.8, bounce: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="absolute inset-0 w-full h-full z-[-1] scale-x-[1.1]"
      >
        <img
          src={avatar}
          alt="avatar"
          className="object-cover opacity-[0.3]  grayscale"
        />
      </motion.div>
      {/* image */}
      <div className="max-w-[472px] md:w-[470px]  md:rounded-full    overflow-hidden ">
        <img src={avatar} alt="avatar" className="object-cover" />
      </div>
      <div className="flex flex-col gap-6 flex-grow ">
        <h3 className=" md:text-4xl text-2xl sm:text-left text-center font-bold">
          What our customers thought?
        </h3>
        <div className="flex flex-col gap-4">
          <p className=" md:text-xl text-sm font-light sm:text-left text-center">
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.{" "}
          </p>
          <h4 className=" font-semibold text-center sm:text-left">
            Holly Davidson
          </h4>
          <div className="flex gap-4 mt-2 items-center justify-center md:justify-start">
            <MoveLeft className="text-dark" />
            <MoveRight className="text-orange" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
