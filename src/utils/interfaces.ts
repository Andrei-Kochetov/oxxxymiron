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
  sys: {
    id: string;
  };
}

export interface ITrackItem {
  image: string;
  track: string;
  releaseDate: string;
  trackName: string;
}

export interface ITrackProps {
  image: string;
  track: string;
  releaseDate: string;
  trackName: string;
  isPlaying: boolean;
  currentTrack: string | null;
  onClick: (track: string) => void;
}

export interface INewItem {
  title: string;
  image: string;
}

export interface IIcon {
  name: string;
  className?: string;
  size?: number;
}

export interface ISection {
  children: ReactNode;
  className?: string;
}

export interface ISectionTitle {
  children: string;
}

export interface ISlider {
  slides: INewItem[];
}
