//create a button with cva and tailwind
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "rounded-full px-8 py-3 font-semibold flex items-center justify-between group cursor-pointer ",
  {
    variants: {
      variant: {
        primary: "bg-orange text-white",
        secondary: "bg-white ",
        default: "bg-orange ",
        dark: "bg-dark text-white",
      },
    },
  }
);
const Button = ({
  children,
  className,
  variant = "default",
  icon,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}{" "}
      {icon && (
        <span className=" flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
