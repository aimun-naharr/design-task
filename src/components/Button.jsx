//create a button with cva and tailwind
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "rounded-full relative px-8 py-3 font-semibold flex items-center justify-between border-2 border-transparent group cursor-pointer  ",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-dark after:bg-dark hover:border-dark before:bg-orange ",
        secondary: "bg-white after:bg-orange hover:border-orange",
        default: "bg-orange ",
        dark: "bg-dark text-white hover:border-white",
      },
    },
  }
);
const shadowVariants = cva(
  "absolute inset-0 bg-dark rounded-full z-[-1] translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-dark",
        secondary: "bg-orange",
        default: "bg-orange",
        dark: "bg-white",
      },
    },
  }
);
const Button = ({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      <div className={cn(shadowVariants({ variant }))} />
      {children}{" "}
      {icon && (
        <span className=" flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
