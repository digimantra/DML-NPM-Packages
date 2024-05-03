import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva("w-full", "rounded-md", "fomnt");

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  return <button className="text-red-400" {...props} />;
};
