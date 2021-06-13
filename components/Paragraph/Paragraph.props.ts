import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParamElement>, HTMLParamElement> {
    children: ReactNode;
    size?: "s" | "m" | "xl";
}