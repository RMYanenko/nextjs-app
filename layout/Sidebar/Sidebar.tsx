import { SidebarProps } from "./Sidebar.props";
import s from "./Sidebar.module.scss";
// import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps) : JSX.Element => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};
