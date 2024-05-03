import { ComponentProps } from "react";
type ButtonProps = ComponentProps<"button">;

export const Button = ({...props}:ButtonProps) => {
  return <button className="text-red-400" {...props}/>;
};
