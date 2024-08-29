import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
