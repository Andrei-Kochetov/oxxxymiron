import { ReactNode } from "react";

export interface IMenuItem {
  name: string;
  link: string;
}

export interface IIcon {
  name: string;
  width?: number;
  height?: number;
}

export interface ISocialItem {
  icon: string;
  link: string;
}

export interface ISectionProps {
  children: ReactNode;
  className?: string
}
