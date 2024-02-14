import { ReactNode } from 'react';

export interface IMenuItem {
  name: string;
  link: string;
}

export interface ISocialItem {
  icon: string;
  link: string;
}

export interface ITourItem {
  date: string;
  clubName: string;
  location: string;
}

export interface ITrackItem {
  image: string;
  track: string;
  releaseDate: string;
  trackName: string;
}

export interface IIcon {
  name: string;
  width?: number;
  height?: number;
}

export interface ISection {
  children: ReactNode;
  className?: string;
}

export interface ISectionTitle {
  children: string;
}
