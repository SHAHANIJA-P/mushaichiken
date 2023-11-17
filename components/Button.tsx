import { CustomButtonProps } from "@/types";
import React from "react";

function Button({ childItem, onClick }: CustomButtonProps) {
  return <button onClick={onClick}>{childItem?.title}</button>;
}

export default Button;
