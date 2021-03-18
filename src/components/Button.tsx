import { FC, ButtonHTMLAttributes } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => (
  <button className="bg-blue-500 text-white px-6 py-2 rounded-sm" {...props} />
);

export default Button;
