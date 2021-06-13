import { ButtonProps } from "./Button.props";
import s from "./Button.module.scss";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.btn, className, {
        [s.primary]: appearance == "primary",
        [s.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(s.arrow, {
            [s.right]: arrow == "right",
            [s.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
