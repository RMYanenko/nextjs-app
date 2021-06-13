import { TagProps } from "./Tag.props";
import s from "./Tag.module.scss";
import cn from "classnames";

export const Tag = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.s]: size == "s",
        [s.m]: size == "m",
        [s.ghost]: color == "ghost",
        [s.red]: color == "red",
        [s.green]: color == "green",
        [s.grey]: color == "grey",
        [s.primary]: color == "primary",
      })}
      {...props}
    >{
      href ? <a href={href}> 
          {children}
      </a> : <>{children}</>
    }  
    </div>
  );
};
