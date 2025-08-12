import { spring } from "motion/react";

export const springTransition = {
  duration: 1.2,
  repeat: Infinity,
  repeatType: "mirror",
  type: spring,
  bounce: 0.7,
};
export const moveUpAnim = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    transition: springTransition,
  },
};
export const moveDownAnim = {
  initial: {
    y: 0,
  },
  animate: {
    y: 20,
    transition: springTransition,
  },
};
export const moveXAnim = {
  initial: {
    x: -10,
  },
  animate: {
    x: 10,
    transition: springTransition,
  },
};
export const growUpAnim = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 0.8,
    transition: springTransition,
  },
};

export const scaleYAnim = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 1.2,
    transition: springTransition,
  },
};
export const faceAnim = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 2,
    y: 2,
    transition: springTransition,
  },
};
export const rotateRightAnim = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: "45deg",
    transition: springTransition,
  },
};
