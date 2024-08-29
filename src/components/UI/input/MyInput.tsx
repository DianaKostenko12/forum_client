import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { classicNameResolver } from "typescript";
import classes from "./MyInput.module.css";
interface MyInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
const MyInput: FC<MyInputProps> = ({ ...props }) => {
  return <input className={classes.myInput} {...props} />;
};

export default MyInput;
