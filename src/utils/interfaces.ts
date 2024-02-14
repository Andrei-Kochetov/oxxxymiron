import { ReactNode } from 'react';

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

export interface ISection {
  children: ReactNode;
  className?: string;
}

export interface ISectionTitle {
  children: string;
}
